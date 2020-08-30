const { readFile } = require('fs').promises;
const http = require('http');
const path = require('path');
const { Item } = require('../models');

const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer(async (req, res) => {
  // Send images to the browser if the URL path begins with /images/
  if (req.url.startsWith('/images/')) {
    // Get the relative path to the image on the disk
    const imageFilePath = './assets' + req.url;

    // Read the file contents. If it errs, return a 404.
    let imageFileContents;
    try {
      imageFileContents = await readFile(imageFilePath);
    } catch (e) {
      res.statusCode = 404;
      res.end();
      return;
    }

    // Get the file extension to construct the correct image type
    const fileExtension = path.extname(req.url);
    const imageType = 'image/' + fileExtension.substring(1);

    // Send back the status, type, and image file content
    res.statusCode = 200;
    res.setHeader('Content-Type', imageType);
    res.end(imageFileContents);
    return;
  }

  // Show the static form to add a new item if the path is
  // "/items/new"
  if (req.url === '/items/new') {
    const formFilePath = './views/add-item.html';
    const formFileContents = await readFile(formFilePath);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(formFileContents);
    return;
  }

  // Handle the form post to create a new Item
  if (req.url === '/items' && req.method === 'POST') {
    // Load the content of the body of the request
    // into the "body" variable
    let body = '';
    for await (let chunk of req) {
      body += chunk;
    }

    // Split, split, replace, decode, and accumulate
    // the string in "body" into an object
    const bodyData = body.split('&')
      .map(keyValue => keyValue.split('='))
      .map(([key, value]) => [key, value.replace(/\+/g, ' ')])
      .map(([key, value]) => [key, decodeURIComponent(value)])
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

    // Create an Item
    await Item.create(bodyData);

    // Redirect the browser to "/"
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
    return;
  }

  // Handle the "use" of one of the items
  if (req.method === 'POST' && req.url.startsWith('/items/')) {
    const pathParts = req.url.split('/');
    const id = Number.parseInt(pathParts[2]);

    if (pathParts[3] === 'used' && !isNaN(id)) {
      // Get the item, reduce the amount, save it
      const item = await Item.findByPk(id);
      item.amount -= 1;
      await item.save();

      // Redirect the browser to "/"
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.end();
      return;
    }
  }

  // This is the default handler. Down here, it will
  // generate the list of items.
  const items = await Item.findAll({ order: ['name'] });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Inventory</title>
    </head>
    <body>
      <header>
        <div><a href="/items/new">Add a new item</a></div>
      </header>
      <main>
        <table>`);

  for (let item of items) {
    res.write(`
      <tr>
    `);
    if (item.imageName) {
      res.write(`<td><img width="50" src="/images/${item.imageName}"></td>`)
    } else {
      res.write(`<td></td>`)
    }
    res.write(`
      <td>${item.name}</td>
      <td>${item.description}</td>
      <td>${item.amount}</td>
      <td>`);
    if (item.amount > 0) {
      res.write(`
        <form method="post" action="/items/${item.id}/used">
          <button type="submit">Use one</button>
        </form>
      `);
    }
    res.write(`</td>
    </tr>`);
  }

  res.end(`
        </table>
      </main>
    </body>
    </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
