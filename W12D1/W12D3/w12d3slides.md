# W12D3 - RESTful API Architecture

Agenda:
- What is RESTful
- What is CORS

---
## `RESTful`
Lets say we are building a clone of Twitter using what 
we have learned so far about Sequelize and Express... 

* What is our API? 
* What are out Endpoints?

* Before we understand what + where RESTful methodology comes into play, lets think back to what an API is, and what an endpoint on an app that we are creating might look like. 

---
## `RESTful`

- Think of this as a pattern, or a method for building out your backend endpoints, a.k.a. for consideration when determining what to name or use as your URL.

- Instead of arbitrarily naming routes, we can use the `RESTful` method. 

The Rules:
1. Organize data into `resource types`. Once you identify these, you can classify your types of endpoints into:
    1. `Collections` 
        - EX: => "/photos" , "/tweets" , "/friends"
    2. `Singular` 
        - EX: => "/photos/1" , "/tweets/1" , "/friends/1"
    * You can combine singular/collection type URLs to produce what is called a `nested resource`. This allows you to fetch a sub-collection of items. 
        - EX: => "photos/1/likes" , "tweets/1/likes" , "users/1/photos"

![](https://miro.medium.com/max/2692/1*pv-pmMPED1XuTtWlHd6b1g.png)

---
## CORS

- What does this stand for?
- Can you explain what it is?

---
## Cross Origin Resource Sharing

* The idea of having another device or client 
ping your app for data. 
* The assumption for browser based apps, is that only the client 
hosting the app can ping the app's backend aka server for data. 
* If you wanted to _enable_ CORS, aka the ability to have other clients ping your app for data, you need to take some extra steps. 
    * In Express.js, those extra steps look like importing the 
    `cors middleware function` from the cors library. See reading for code walk through.  

---
# Additional Resource on CORS

[CORS Analogy](https://dev.to/dougblackjr/cors-in-a-way-i-can-understand-501d)

---
# Today's Project

- Twitter Lite - building out the back end of this app. 
Tomorrow you will be building out the frontend.
Very important project to complete before the group project! 
(Also a great resource while working on the group project...)