## CORS
  - Cross-Origin Resource Sharing
  - An `origin` is the combination of protocol, domain, and port
  - If we try to access resources from another origin, modern browsers will prevent the request unless we do some configuration. This is for added security so that we only accept resources from trusted sources.

## `cors` NPM Package
  - We can add the `cors` package to our application and use it as middleware for our routes.
  ```js
  const cors = require("cors");

  router.get(
    "/",
    cors(),
    asyncHandler(async (req, res) => {
      const tasks = await Task.findAll();
      res.json({ tasks });
    })
  );
  ```

## "Simple" vs "Preflighted" Requests
  - Some requests sent by a browser are determined to be "simple" and are immediately sent on to the server. Other requests are "preflighted", which means the browser sends a request with the `OPTIONS` method to check to see if the server has been configured to accept the request.
  - In order for a request to be considered simple, it has to meet certain criteria:
    - The HTTP method has to be either `GET`, `HEAD`, or `POST`
    - It can only use safe-listed request headers:
      - accept
      - accept-language
      - content-language
      - content-type
      - width
      - viewport-width
      - (a few more less common)
    - The `content-type` can only be `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`

## Using CORS for the entire API
  - We can tell our whole application to use the `cors` middleware instead of individual routes. To be safe, we should specify where we are allowing requests to come from
  ```js
  const cors = require("cors");
  app.use(cors({ origin: "http://localhost:4000" }));
  ```