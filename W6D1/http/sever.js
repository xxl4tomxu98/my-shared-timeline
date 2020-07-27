const http = require('http');
http.createServer(function (request, response) {
    if (request.url === '/200') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write('<h1>OK</h1>');
        response.end();
    } else {
        response.writeHead(404)
        response.end();
    }
}).listen(8080, function () {
    console.log('Listening for requests on port 8080...')
})



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