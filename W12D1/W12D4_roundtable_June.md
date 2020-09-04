# API Security Roundtable

## OAuth

### Explain the fundamental concepts of OAuth as a way to authenticate users.

- What is OAuth?

  - Authentication through a 3rd party.

- Who are the three key players in the OAuth flow?

  1. Application (Developers)
  2. User
  3. Service API

- Is OAuth a standardized? If so, where can I find those standards?

  - [RFC 6749 Section 4.3](https://tools.ietf.org/html/rfc6749)

### Describe the workflow of OAuth resource owner password credentials grant

- What are the six high-level steps of the OAuth flow? What happens in each step?

  1. Application asks for if they can get info from a third party

  2. User issues an Authorization Grant to Application

  3. Application sends the Authorization Grant to Service API - Authorization Server

  4. Issues a Auth token to the Application

  5. Application send the Auth token to Service API - Resource Server

  6. GET THE RESOURCE!!!

  ![flow](./images/abstract_flow.png)

## JWT

### Describe the components of a JWT and how it is constructed

- What is a JWT?

  - packet of stuff that we can verify the contents and the sender. JSON Web Token

- What are the three parts of a JWT token? What are their purposes?

  1. Header

     - Describes the hashing algorithm that the JWT uses

  2. Payload

     - Holds the data

  3. Signature

     - Hash (header + payload + secret)

     - On Server we take the (Header + Payload) + secret on server === Signature

  This is what one looks like, the '.' separates each part.

 ```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.d8FM2YvcKtygfaqgkrxx7aOt4sVWC3V0-xu5e0TVSvg```

### Configure an Express application to use token-based authentication and authorization using OAuth resource owner password credentials grant

- How do we create a JWT in our projects?

  - What package do we use?

    - `jsonwebtoken`

  - Where should we store our secret for our signature?

    - In the .env file so it's not shared

  - What method do we use to create a JTW token?

    ```
    jwt.sign(payload, secretOrPrivateKey, [options, callback]);
    ```

- Bearer Tokens?? :scream:

  - How do we parse a bearer token using middlewear?

    - What library do we use?

      - `express-bearer-token`

    - Okay, I'm using this as a middlewear... what does it do?
      - It parses the HTTP header `Authorization` and attaches the value to the req as token. We can then access the token at req.token

  - What method do we use to verify a JWT token?

    ```
    jwt.verify(token, secretOrPrivateKey, [options, callback]);
    // We like using the callback, it'll run after it verifies the token
    ```

    ![verify passed](./images/payload.png)
    Here you can see that since the secret was right, we have access to the JWT payload

    ![verify failed](./images/wrong.png)
    Here you can see that we now have an err and our payload is undefined. We can use this functionality to authenticate a user, verify that it's not some random token, and create error handlers if the verify fails.

  - How can we send a bearer token in Postman?

    1.  Create a Header called “Authorization” and you can give that a key of

    ```javascript
    `Bearer ${token}`;
    //The word Bearer, a space, the token without quotes
    ```

    2. Go to the Auth tab (located next to Headers), select Bearer from the “type” dropdown, then input your token into the token input box, again no quotes.
