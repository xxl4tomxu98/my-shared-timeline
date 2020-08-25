const http = require("http");
// http.createServer((req, res)=>{
//   if(req.url==="/200"){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<h1>OK!</h1>');
//     res.end();
//   } else {
//     res.writeHead(404);
//     res.end();
//   }

// }).listen(3000, ()=>{
//   console.log("Listening to requests on port 3000...")
// })

//URL property includes a leading "/"
// end() to send it back to the client
// visiting http://localhost:300/OK return a 200
// http.createServer(function(req, res){
//   if(req.url==="/OK"){
//     console.log("Inbound 'OK' response being processed...")
//     res.writeHead(200);
//     res.end();
//   } else {
//     console.log('Not Found');
//     res.writeHead(404);
//     res.end();
//   }
// }).listen(3000, function() {
//   console.log("Listening to request on port 3000...")
// });

/*
nc localhost 3000
GET/HTTP/1.1
/Bad Request 400
/Created 201
/Forbidden 403
/Gatewat-Timeout 504
/Server Error 500
/Move Permanetly 301
/Unauthorized 401
*/
http.createServer(function(req, res){
  if(req.url==="/OK"){
    console.log("Inbound 'OK' response being processed...")
    res.writeHead(200);
    res.end();
  } else if (req.url==="/Bad-Request") {
    console.log('This is a bad request.');
    res.writeHead(400);
    res.end();
  } else if (req.url==="/Created") {
    console.log('The request is created.');
    res.writeHead(201);
    res.end();
  }
  else if (req.url==="/Forbidden") {
    console.log('This request is forbidden.');
    res.writeHead(403, {'Content-Type': 'text/html'});
    res.write("<h1>This is not allowed site.</h1>");
    res.end();
  }
  else if (req.url==="/Found") {
    console.log('We found your request.');
    res.writeHead(302, { "Location": "http://appacademy.io" });
    res.write("<h1>Visit our app academy site.</h1>");
    res.end();
  }
  else if (req.url==="/Gateway-Timeout") {
    console.log('The gateway is timeout');
    res.writeHead(504);
    res.end();
  }
  else if (req.url==="/Internal-Server-Error") {
    console.log('There is a Server Error.');
    res.writeHead(500);
    res.end();
  }
  else if (req.url==="/Moved-Permanently") {
    console.log('The page you requested is moved permanently.');
    res.writeHead(301);
    res.end();
  }
  else if (req.url==="/Unauthorized") {
    console.log('Unauthorized request.');
    res.writeHead(401);
    res.end();
  } else if (req.url==="/Webpage"){
    console.log("create HTML");
    res.writeHead(200);
    res.write("<body>");
    res.write("<h1>This is my little page.</h1>");
    res.write("</body>");
  } else if(req.url === "/Created"){
    if(req.method==="POST"){
      res.writeHead(201);
      res.end();
    } else {
      console.log("Method not allowed")
      res.writeHead(405);
      res.end();
    }
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(3000, function() {
  console.log("Listening to request on port 3000...")
});

/*
Phase 3a
nc -v localhost 3000 // "verbose" mode
GET /OK HTTP/1.1
writeHead(200)

npm install netcat
Ctrl + C
*/

/*
Bonus
writeHEad accepts 2nd argument: object conataining headers
*/
