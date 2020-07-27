## W6D1
>
## HTTP

Note:
- Metaphor
- Request
- Response
- Code Demo

---
### A Note
- This topic has a lot of depth!

- Totally normal to feel overwhelmed by all of the material. The goal is not to understand the entirety of the internet, but only this one component.
- Please mind the scope of your questions!
 - For the sake of time, and the attention of your peers, filter your questions to things that are *directly relevant* to the curriculum.

---
## The Web

![](./web.png)

---

## Communicating on the Web

![](https://github.com/atopchev/w6d1-http/blob/master/envelope.png?raw=true)

---


###   Request

![](https://github.com/atopchev/w6d1-http/blob/master/request.png?raw=true)

---

###   Request
* Made up of three parts:
   1. A request Line
        -  HTTPVERB + URIPATH + HTTPVERSION.
        -  "GET / HTTP/1.1"
 
   2. (Request) Headers
        - Host
        - etc
   3. Body
       - `GET` requests `NEVER` have a body.
---

###   LO #1 & #2   :

1. Match the header fields of HTTP with a bank of definitions.
    - `Host`: the domain of where we are going
    - `Content-Type`: Type of the BODY of the request/response
    - `Content-Length`: Length of the BODY of the request/response
    - `Content-*` headers denote information about the body;

2. Matching HTTP verbs to their common uses.
    - GET  - to get a webpage (ex go to chrome and access 'google.com');
    - PUT - Update a resource on the server (`whole resource`)
    - PATCH - Also updates a resource on the server, but only modifies `part of the resource`;
    - POST - Creates a new resource on the Server (Signing up for a website)
    - DELETE - Deleteing a resource from the Server
---

###   Response

![res](https://github.com/atopchev/w6d1-http/blob/master/HTTP-Response.png?raw=true)

---
###   Response Cont.   :

1. A request Line -> same as above, except format changes:
    - VERSION + STATUS CODE + REASON PHRASE
    - "HTTP/1.1 200 OK"
2. (Response) Headers
    - Location
    - Content-Type
    - Expires
    - Content-Disposition
    - Set-Cookie
    - etc
3. Body

---

###   HTTP Status Codes Have A Pattern   :

- 1xx (Informational): Request received, server is continuing the process.
- 2xx (Success): The request was successfully received, understood, accepted and serviced.
- 3xx (Redirection): Further action must be taken in order to complete the request.
- 4xx (Client Error): The request contains bad syntax or cannot be understood.
- 5xx (Server Error): The server failed to fulfill an apparently valid request.

---

###   LO #3, #4, #5   :

3. match common HTTP status codes to their meanings.
    - 200 - OK
    - 302 - Redirect
    - 400 - Bad Request
    - 401 - Authentication Required
    - 402 - Payment Required
    - 403 - Forbidden
    - 404 - NOT FOUND
    - 500 - Internal SERVER Error

4. How would you send a simple HTTP request to google.com?
    `GET / HTTP/1.1
     Host: google.com`

5. write a very simple HTTP server using ‘http’ in node with paths that will result in the common HTTP status codes.

    - Code along with the video / answered in today's project!
---

##  EOD Lecture

---

0. Go over project solutions.

---

1. Match the header fields of HTTP with a bank of definitions.
    - `Host`: Base url where the HTTP request is being made to (i.e. domain)
        " GET /images HTTP/1.1
          Host: google.com "
    - `Content-Type`: dictates the format of the body.
    - `Content-Length`: char length
    - `Content-*`: describing our body.

---

2. Matching HTTP verbs to their common uses.
    - GET  - fetches data/items from a resource
    - PUT - replacing an existing item from a resource. (i.e. re-registering aka whole new form)
    - PATCH - update an existing item (i.e. address change)
    - POST - create a new resource in server (i.e. new patient)
    - DELETE - destroys a resource on the server !!!
---

3. match common HTTP status codes to their meanings.
    - 200 - OK
    - 302 - Found (Redirect)
    - 400 - BAAAAAD Request
    - 401 - Unauthorized Request
    - 403 - Forbidden
    - 404 - Not Found
    - 418 - I am a teapot
    - 500 - Internal Server Error

---

4. send a simple HTTP request to google.com:

    `GET / HTTP/1.1
     Host: google.com`

---

5. write a very simple HTTP server using ‘http’ in node with paths that will result in the common HTTP status codes.

    - You did this today.
