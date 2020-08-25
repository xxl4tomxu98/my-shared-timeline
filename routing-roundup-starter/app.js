const express = require('express');
const app = express();
const route = require('./routes/margauxRoutes.js');

app.set('view engine', 'pug')

app.get('/', (req, res) =>{
    res.send("Hello from Express!");
})

app.get('/*xyz', (req, res) =>{
  res.send("That's all I wrote.");
})

app.get('/capital-letters/:id', (req, res) =>{
    res.send(req.params.id.toUpperCase())
})

app.use("/margot", route);
app.use("/margeaux", route);

app.all(/^\/[^\/]*$/, (req, res) => {
    const random = Math.floor(Math.random() * 9)
    const data = {method: req.method, path: req.path, randomNumber: random}
//   /^\/[A-Za-z0-9\-_]*$/
//    about-foo
//   /^\/\w*\-*\w*$/
    res.render('template', data)
})

//  /about/foo/bar/update/test
const port = 8081;
app.listen(port, ()=>{
  console.log(`Listening on port ${port}...`);
})
