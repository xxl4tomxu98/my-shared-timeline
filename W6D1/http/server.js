const http = require('http');
const {readFile} = require('fs').promises;
const path = require('path');

// http.createServer(function (request, response) {
//     if (request.url === '/200') {
//         response.writeHead(200, { 'Content-Type': 'text/html' })
//         response.write('<h1>OK</h1>');
//         response.end();
//     } else {
//         response.writeHead(404)
//         response.end();
//     }
// }).listen(8080, function () {
//     console.log('Listening for requests on port 8080...')
// })



// const http = require('http');

// http.createServer(function(req, res) {
//     if (req.url === "/bananas") {
//         res.end();
//         res.write('<h1> Hello, World! Bananas </h1>')
//     } else {
//         res.write('<h1> Error </h1>')
//         // Update the res status to be 422

//     }
// }).listen(8080, function(){
//     console.log('Listening...')
// })



// const server = http.createServer(async (req, res)=>{
//   if(req.method=== 'GET' && req.url === '/') {
//     const homeFilePath = './homepage.html';
//     const homeFileContent = await readFile(homeFilePath);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end(homeFileContent);
//     return;
//   }
//   res.statusCode = 404;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('NOT FOUND');
// });


// const server = http.createServer(async (req, res)=>{
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<h1>This is my first server!</h1>');
//   res.write('<dl>');

//   for (let [key, value] of Object.entries(req.headers)){
//     res.write(`<dt>${key}</dt>`);
//     res.write(`<dd>${value}</dd>`);
//   }
//   res.write('</dl>');
//   res.end();
// });

// const port = 8081;
// server.listen(port, ()=>{
//   console.log(`Server running on port ${port}`);
// })


// const server = http.createServer(async (req, res)=>{
//   const ext = path.extname(req.url);
//   console.log(ext);
//   let content;
//   if(ext === '.JPG'){
//     content = await readFile('./IMG_1027.JPG');
//     res.setHeader('Content-Type', 'image/jpeg');
//   } else {
//     content = await readFile('./example.html');
//     res.setHeader('Content-Type', 'text/html');
//   }
//   res.statusCode = 200;
//   res.end(content);
//   });

//   const port = 8081;
//   server.listen(port, ()=>{
//     console.log(`Server running on port ${port}`);
//   })



  // const server = http.createServer(async (req, res)=>{
  //   const ext = path.extname(req.url);
  //   //console.log(ext);
  //   let content;
  //   if(req.method === 'POST'){
  //     let bodyContent = '';
  //     for await (let chunk of req) {
  //       bodyContent += chunk;
  //     }
  //     const [fieldName, encodedFieldValue] = bodyContent.split('=');
  //     const spacesFieldValue = encodedFieldValue.replace(/\+/g, ' ');
  //     const fieldValue = decodeURIComponent(spacesFieldValue);
  //     content = `
  //       <h1>I got your request</h1>
  //       <p>You sent ${fieldName} with the value ${fieldValue}.</p>
  //       <a href="/">GO BACK!</a>
  //     `;
  //     res.setHeader('Content-Type', 'text/html');
  //   } else if(ext === '.JPG'){
  //     content = await readFile('./IMG_1027.JPG');
  //     res.setHeader('Content-Type', 'image/jpeg');
  //   } else {
  //     content = await readFile('./example.html');
  //     res.setHeader('Content-Type', 'text/html');
  //   }
  //   res.statusCode = 200;
  //   res.end(content);
  //   });
    // const port = 8081;
    // server.listen(port, ()=>{
    //   console.log(`Server running on port ${port}`);
    // })



const server = http.createServer(async (req, res)=>{
  const ext = path.extname(req.url);
  //console.log(ext);
  let content;
  if(req.method === 'POST'){
    let bodyContent = '';
    for await (let chunk of req) {
      bodyContent += chunk;
    }
    const keyValuePairs = bodyContent.split('&')
    .map(keyValuePair=> keyValuePair.split('='))
    .map(([key, value]) =>[key, value.replace(/\+/g, ' ')])
    .map(([key, value]) => [ key, decodeURIComponent(value)])
    .reduce((acc, [key, value]) =>{
          acc[key] = value;
          return acc;
        }, {});
    console.log(keyValuePairs);

    content = `<h1>I got your request</h1>`;
    for(let [key, value] of Object.entries(keyValuePairs)){
      content += `<p>You sent ${key} with the value ${value}</p>`
    }
      content += `<a href="/">GO BACK!</a>`;
      res.setHeader('Content-Type', 'text/html');
    } else if(ext === '.JPG'){
      content = await readFile('./IMG_1027.JPG');
      res.setHeader('Content-Type', 'image/jpeg');
    } else {
      content = await readFile('./example.html');
      res.setHeader('Content-Type', 'text/html');
    }
      res.statusCode = 200;
      res.end(content);
    });

    const port = 8081;
    server.listen(port, ()=>{
      console.log(`Server running on port ${port}`);
    })
