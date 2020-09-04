## REST
- Representational State Transfer

## REST Architectural Constraints 
1. Client-server architecture
  - Request-response cycle between a client (your browser) and a server
2. Stateless (Mostly with us)
  - We can maintain connections with protocols like web sockets, and retain data in cookies that are passed back and forth, but in general our communication is stateless. Each individual request does not know about previous requests.
3. Cache (Not really with us anymore)
  - We used to cache responses on intermediary servers to be able to serve subsequent duplicate requests faster. For security, this doesn't really exist anymore. We can cache responses locally on our own machine, but this is a slightly different concept.
4. Uniform interface
  - Uniform Resource Locator (URL) is used to indicate where we are sending our request and what information we are asking for.
5. Layered system
  - Layers of devices between the client and the server. Our request is passed along until it gets to its final destination.
6. Code on demand
  - JavaScript! We can provide additional functionality in our responses. Before JavaScript, we could only display the content that was sent as-is or use some pre-installed software on the client's machine in order to manipulate the response. Now we can send along code (in a script tag) that tells the client how to work with the data.

## REST and HTTP
- REST is not the same as or a replacement for HTTP
- It is simply the set of architectural constraints (defined above) that can be implemented by othe protocols (including HTTP)

## RESTful
- A collection of conventional endpoints to organize data interaction.
- There is NO "standard" with rules governing it, just a very popular and convenient organization method for setting up routes with recognizable meaning.

### Collection vs Single-Resource URLs
- Collection URLs end in plural nouns and point to an entire group/collection of data
  - `/posts` would indicate we are referencing all posts
- Single-Resource URLs use a plural noun, followed by a unique identifier, typically the primary key assigned to that resource
  - `/posts/19` would reference the post with an ID of 19
  - `/users/the_best_username` important to note that the unique identifier does not strictly have to be a numbered ID, it's just very common for it to be implemented that way
- Nested Collection URLs indicate a many-to-one connection; a collection that is tied to one specific resource, such as all of the comments for a single post. It takes the format of a plural noun, followed by a unique identifier, followed by the plural noun indicating the nested collection.
  - `/posts/19/comments` would reference all comments associated with the post that has an ID of 19.

### Convention over Configuration
- We should be able to determine what a request is intending to accomplish just by looking at the HTTP verb that is used along with the URL that it is being sent to.
- Ideal HTTP Verb Interactions (can be performed with ajax, fetch, etc.)
| HTTP Verb | Collection URL Meaning (`/posts`)    | Single-Resource URL Meaning (`/posts/19`) |
|-----------|--------------------------------------|-------------------------------------------|
| GET       | Get "all" of the specified resources | Get the details of the resource           |
| POST      | Create a new resource                | n/a                                       |
| PUT       | n/a                                  | Replace the resource                      |
| PATCH     | n/a                                  | Update the resource                       |
| DELETE    | Delete all of the resources          | Delete the specified resource             |

- HTML-only Interactions (without JavaScript, a browser can only use GET and POST verbs)
| HTTP Verb | URL                  | Meaning                                    |
|-----------|----------------------|--------------------------------------------|
| GET       | **/posts**           | Get a list of the blog posts               |
| POST      | **/posts**           | Create a new blog post                     |
| GET       | **/posts/new**       | Get the form to create a post              |
| GET       | **/posts/18**        | Get the single blog post with id 18        |
| POST      | **/posts/18**        | Update the blog post with id 18            |
| GET       | **/posts/18/edit**   | Get the edit form for blog post with id 18 |
| POST      | **/posts/18/delete** | Delete the blog post with id 18            |

- HTML-only Interactions for Nested Resources
| HTTP Verb | URL                        | Meaning                                          |
|-----------|----------------------------|--------------------------------------------------|
| GET       | **/posts/18/comments**     | Get all comments for blog post 18                |
| POST      | **/posts/18/comments**     | Create a new comment for post 18                 |
| GET       | **/posts/18/comments/new** | Get the form to create a new comment for post 18 |
| GET       | **/comments/3**            | Get the single comment with id 3                 |
| POST      | **/comments/3**            | Update the comment with id 3                     |
| GET       | **/comments/3/edit**       | Get the edit form for comment with id 3          |
| POST      | **/comments/3/delete**     | Delete the comment with id 3                     |
