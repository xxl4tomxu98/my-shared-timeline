# HTTP Learning Objectives
## Practice Quiz
[HTTP Verb Quiz](https://forms.gle/B49D3kzwGoJ8TeT67)</br>
HTTP stands for **HyperText Transfer Protocol.** Is a protocol for transmitting hypermedia documents, such as HTML. HTTP requests can have up to three parts: a request line, headers, and a body.
## Learning Objectives
### Match the header fields of HTTP with a bank of definitions.
**HTTP headers** let the client and the server pass additional information with an HTTP request or response. Here are some common request headers you'll see:
- Host: specifies the domain name of the server.
- User-Agent: a string that identifies the operating system, software vendor or version of the requester.
- Referer: the address of the previous web page from which a link to the currently requested page was followed.
- Accept: informs the server about the types of data that can be sent back.
- Content-Type: Indicates the media type found in the body of the HTTP message.
### 2. Matching HTTP verbs (GET, PUT, PATCH, POST, DELETE) to their common uses.
HTTP defines a set of request methods to indicate the desired action to be performed for a given resource.
- GET: a request to retrieve data. It will never have a body.
- POST: sends data to the server creating a new resource.
- PUT: updates a resource on the server.
- PATCH: similar to PUT, but it applies partial modifications to a resource.
- DELETE: deletes the specified resource.
### 3. Match common HTTP status codes (200, 302, 400, 401, 402, 403, 404, 500) to their meanings.
HTTP response status codes indicate whether a specific HTTP request has been successfully completed.
- 200: OK. The request has succeeded.
- 302: Found. The URI of requested resource has been changed temporarily.
- 400: Bad Request. The server could not understand the request due to invalid syntax.
- 401: Unathorized. The client must authenticate itself to get the requested response.
- 402: Payment Required. 
- 403: Forbidden. The client does not have access rights to the content.
- 404: Not Found. The server can not find the requested resource.
- 500: Internal Server Error. The range from 500-599 indicate server errors.
### 4. Send a simple HTTP request to google.com
netcat (nc) allows you to open a direct connection with a URL and manually send HTTP requests. 

**Request**
```zsh
nc -v google.com 80
GET / HTTP/1.1
```
**Response**
```zsh
HTTP/1.1 200 OK
Date: Thu, 28 May 2020 20:50:17 GMT
Expires: -1
Cache-Control: private, max-age=0
Content-Type: text/html; charset=ISO-8859-1
<!doctype html>
<html>
</html>
```
### 5. Write a very simple HTTP server using ‘http’ in node with paths that will result in the common HTTP status codes.
```JS
const http = require('http');

http.createServer(function(request, response) {
    if (request.url === '/') {
        response.writeHead(
            200, 
            { 'Content-Type': 'text/html' }
        );
        response.write('<h1>OK</h1>');
        response.end();
    } else {
        response.writeHead(404);
        response.end();
    }
}).listen(8080, function() {
    console.log(
        'listening for requests on port 8080...'
    );
});
```

# Promises
## Practice
Do practice problems 1-3 -- I'll post solutions later tonight
[Trivia Game Three Ways](https://open.appacademy.io/learn/js-py---jun-2020-online/week-6-jun-2020-online/trivia-game-three-ways)

### Learning Objectives
1. Instantiate a Promise object
2. Use Promises to write more maintainable asynchronous code
3. Use the fetch API to make Promise-based API calls
4. Use async/await with promise-based functions to write asynchrnous code that behaves synchronously.


# HTML
- Be comfortable with using HTML tags. This is review/tangential material and will not be tested directly on the assessment, but if it would appear in a problem, you should know what it is doing.
```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Example</title>
    <link rel="stylesheet" href="style.css">
    <script async type="module" src="index.js"></script>
</head>
<body>
    <main>
        <h1>An HTML page example</h1>
        <p>
            This is a very basic HTML page. For more examples click 
            <a href="https://open.appacademy.io/learn/js-py---apr-2020-online/week-6-apr-2020-online/brushing-up-on-your-html">here.</a>
        </p>   
    </main>
</body>
</html>
```

# Testing
## Practice
[Reading Tests Project](https://open.appacademy.io/learn/js-py---jun-2020-online/week-6-jun-2020-online/reading-tests--hanoi-game) </br>
[Writing Tests Project](https://open.appacademy.io/learn/js-py---jun-2020-online/week-6-jun-2020-online/writing-tests--tdd-project)</br>
Note -- make sure you get all the way through the Writing Tests project including Phase 3 -- if you have any questions on protoypes, let the instructors know or re-read your material from last week ([Constructor Functions](https://open.appacademy.io/learn/js-py---jun-2020-online/week-5-jun-2020-online/constructor-functions--what--x27-s-your-function-), [JS Classes](https://open.appacademy.io/learn/js-py---jun-2020-online/week-5-jun-2020-online/putting-the-class-in-javascript-classes))
1. Explain the "red-green-refactor" loop of test-driven development.
2. Identify the definitions of SyntaxError, ReferenceError, and TypeError
3. Create, modify, and get to pass a suite of Mocha tests
4. Use Chai to structure your tests using behavior-driven development principles.
5. Use the pre- and post-test hooks provided by Mocha