# Assessment Summary

- Open notes assessment:

  - React documentation
  - React Router documentation
  - Mozilla Developer Network
  - Any of your previous projects or assessments

- 2 hours 30 min project assessment
- No MC's
- No short answers

## How to Prepare

Be able to do the projects mostly without instructions

- Some projects to look at:

  - [Simple Calculator]
    - Intro to State
    - Class Components
  - [Widgets] - Clock part
    - Lifecycle
  - [Context To-Do List]
    - Context
    - Class Components
    - Functional Components
  - [Tweets Revisited]
    - Context
    - Routes
    - Class Components
    - Functional Components

- Know how to use Functional components

  - Review Day 1 + 2 Material

- Know how to use Class components

  - Review Day 3 Material
  - `this.state`
  - `this.setState`
  - Forms
  - lifecycle methods
    - `componentDidMount`
    - `componentDidUpdate`
    - `componentWillUnmount`

- Know how to use `react-router-dom`

  - Review Day 4 Material
  - `Switch` component
  - `Route` component, props: `path`, `exact`, `render`, `component`
    - use `exact` unless specified otherwise
  - `NavLink` component, props: `to`, `activeClassName`

- Know how to use Context with dynamic values
  - Review Day 5 Material
  - `React.createContext`
  - providers
  - consumers
    - how to access the `value` of the context in a component
      - `<ContextName.Consumer>`
        - For both Functional AND Class components
      - `static contextType = ContextName;`
        - For Class component ONLY
  - how to update the value of a context
- PRACTICE ASSESSMENT
  - Posted in Slack

[widgets]: https://open.appacademy.io/learn/js-py---may-2020-online/week-14-may-2020-online/a-widget-library
[simple calculator]: https://open.appacademy.io/learn/js-py---may-2020-online/week-14-may-2020-online/simple-calculator
[context to-do list]: https://open.appacademy.io/learn/js-py---may-2020-online/week-14-may-2020-online/context-to-do-list
[tweets revisited]: https://open.appacademy.io/learn/js-py---may-2020-online/week-14-may-2020-online/tweets-revisited

# Week 14 Learning Objectives - React

## Basic React Learning Objectives

1. Explain how React uses a tree data structure called the "virtual DOM" to model the DOM

- React mirrors the DOM's tree structure with nodes that represent the HTML elements that are being rendered. When changes to these virtual elements occur, React is able to easily match them up with the HTML that needs to be changed in the actual DOM.

2. Show how to use `React.createElement` to create virtual DOM nodes

- React.createElement takes in three types of arguments. First is the type of element we are trying to make (the HTML tag passed as a string or a reference to another component). The second is the properties that we are passing to the newly created element. Finally we can specify children that this element should have.

```js
React.createElement(
  // type
  "div",
  // properties
  { className: "App123" },
  // children
  React.createElement("h1", null, "Product Sections"),
  React.createElement(ProductSection, { items: props.fruits, type: "Fruits" }),
  React.createElement(ProductSection, {
    items: props.vegetables,
    type: "Vegetables",
  })
);
```

3. Use `React.createElement` to create nodes that represent HTML tags

```js
  React.createElement('a', null, 'Hello World!');
```

4. Use `React.createElement` to create elements based on components

```js
// Here we are creating a ProductSection component (defined elsewhere), passing in props for items and type, with no children defined directly here
React.createElement(ProductSection, { items: props.fruits, type: "Fruits" });
```

5. Use `ReactDOM.render` to have React render your virtual DOM nodes into the actual Web page

- ReactDOM.render takes in two arguments: the element that we would like to render and a a reference to the HTML element that we are taking over and replacing the contents of.

```js
// Reference to our main tag that we are taking over
const target = document.querySelector("main");
// The element that we are creating and placing inside of main
const app = React.createElement(App, { fruits, vegetables });

ReactDOM.render(app, target);
```

6. Use `ReactDOM.render` to update existing DOM

- React keeps track of what it has already rendered with its virtual DOM. When we rerender, it compares what we had previously created with the new content. If anything is new or changed, it will implement those changes in the DOM.
- In this example, we had already rendered our App component. Clicking the button with class `apple` adds a new apple item into our fruits array. Since we want the new apple to be rendered as well, we invoke render with the App component and the updated props. React will see that we only have one new element to create. It won't regenerate the entire HTML, just add in the new element.

```js
document.querySelector(".apple").addEventListener("click", () => {
  fruits.push({ name: "apple", imgSrc: "./images/apple.jpg" });

  // react takes existing virtual DOM from last time it rendered
  // compares to new thing trying to render
  // if anything has changed, updates
  ReactDOM.render(React.createElement(App, { fruits, vegetables }), target);
});
```

7. Use the second argument to `React.createElement` to pass data to your components through the conventionally-named `props` argument

- When we create our ProductSection component, we pass items and type properties to the component as the second argument.

```js
// Here we are creating a ProductSection component (defined elsewhere), passing in props for items and type, with no children defined directly here
React.createElement(ProductSection, { items: props.fruits, type: "Fruits" });
```

- In the ProductSection component, we traditionally capture the properties that we passed in as the `props` parameter. We can reference the different keys that we created for each property anywhere within this component by using `props.propertyName`.

```js
const ProductSection = (props) =>
  React.createElement(
    // type
    "section",
    // properties
    { className: "product-section" },
    // children
    React.createElement("h2", null, props.type), // The type that we passed down from our App component
    React.createElement(
      ProductList,
      { items: props.items } // The items that we passed down from our App component
    )
  );
```

- You may also see props destructured, such as:

```js
const ProductSection = {type, items} => React.createElement(
  // code removed for brevity
  React.createElement('h2', null, type), // we can now use type instead of props.type
   React.createElement(
    ProductList,
    { items: items} // We can now use items instead of props.items
  )
);
```

8. Use the second argument of `React.createElement` to specify attributes to render on actual DOM nodes

```js
// Here we are creating an h1 tag with a className property and the content of 'Hello World!'
// We have to use className instead of class because class is a key word in JavaScript, so React maps the className key to the class property for us.
// We can similarly assign any attributes in this way, such as the type of inputs
React.createElement('h1', { className:'greeting' }, 'Hello World!');
```

9. Use `Array#map` to create an array of virtual DOM nodes while specifying a unique key for each created virtual DOM node

- All arguments after the first two that are passed to `React.createElement`, including arrays of elements, are used as children for element we are creating.
- In order for React to more easily keep track of each individual element being produced from a mapping function, it wants us to specify a `key` attribute with a unique value for each mapped element. That way if a change occurs to one of the elements, it will be able to update just the one node instead of all mapped nodes.
- This is easy to implement by just adding a `key` to the second argument of `createElement`. If we are dealing with items from a database, we'll often use that item's `id` as the key, since we know it is unique. In this case we are just using the index of the array being created since our elements don't have ids, but ideally we would have something unique to that individual element.

```js
const ProductList = (props) =>
  React.createElement(
    // type
    "ul",
    // properties
    { className: "product-list" },
    // children

    props.items.map((item, i) =>
      React.createElement(ProductListItem, { item, key: i })
    )
  );
```

## React Class Components

1. Create a simple React application by removing items and content from a project generated by the Create React App default template

- We can generate a React app using `create-react-app`

```
npx create-react-app my-app-name
```

- This command will generate a default application. We generally don't need a lot of the files that are created this way. Things we can remove/alter for our basic purposes include:

  - Remove all files in the `public` folder except for `index.html`
  - Alter `index.html` to just include a `div` tag in the body, with an id of `root`

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>React App</title>
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>
  ```

  - From the src folder, remove the following extra files:
    - `App.css`
    - `App.test.js`
    - `logo.svg`
    - `serviceWorker.js`
    - `setupTests.js`
  - Update the contents of `App.js` to the simplified code:

  ```js
  // ./src/App.js
  import React from "react";

  function App() {
    return <h1>Hello world!</h1>;
  }

  export default App;
  ```

  - Update the contents of `index.js` to the simplified code:

  ```js
  // ./src/index.js
  import React from "react";
  import ReactDOM from "react-dom";
  import "./index.css";
  import App from "./App";

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
  ```

  - Remove any default styles generated for you in `index.css`

2. Create a simple React application using a custom Create React App template

- Templates allow you to change what is generated by `create-react-app`, which can save you from having to make all of the adjustments each time we want to create a simple application.
- App Academy has created a template that does the changes suggested above for you automatically:

```
npx create-react-app my-app-name --template @appacademy/simple
```

3. Create a React component using ES2015 class syntax

- In order for us to make a class component, we need to extend `React.Component` in our class definition.
- If we have functionality that we want to implement in our constructor (such as setting a default state or binding functions), we need to first invoke `super(props)`, which will set up the default functionality of the class that we inherit from `React.Component`
- Lifecycle methods can be written in the body of the class and will be invoked at the appropriate time during the component's life
- We are required to have a `render` function in our class that returns the content of our component to be rendered in the browser. This function will be invoked whenever our component mounts, when its state is set, when it receives new props, or when its parent component rerenders.

```js
// Clock.js
import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({ time: new Date() });
  };

  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
      <div>
        <h1>Clock</h1>
        <div className="clock">
          <p>
            <span>Time:</span>
            <span>
              {hours}:{minutes}:{seconds} PDT
            </span>
          </p>
          <p>Date: {this.state.time.toDateString()}</p>
        </div>
      </div>
    );
  }
}

export default Clock;
```

4. Understand when it's appropriate to use a class component

- Class components are useful when we want to keep track of the state of the application or perform lifecycle methods.
- If interacting with the component should change some data, such as keeping track of a form's input, or altering values based on button clicks, we would want to keep track of the changing data in state.
- If we want to perform some action when a component mounts, updates, or unmounts, we want to use the lifecycle methods `componentDidMount`, `componentDidUpdate`, or `componentWillUnmount`, which are available to us in a class component.
  - Common use case for lifecycle methods would be if we want to fetch data from a database or other API after mounting

5. Initialize and update state within a class component

- To initialize state, we assign `this.state` to our object with default values in the constructor

```js
constructor(props) {
  super(props);
  this.state = {
    time: new Date()
  };
}
```

- Whenever we want to update our state, we have to invoke the `setState` method, passing in whatever keys/values we would like to update on state. This is important because the method is what tells React that we need to rerender. If we reassign the value of state directly instead of invoking this method, React will not trigger a rerender and our component won't change in our browser.

```js
tick = () => {
  this.setState({ time: new Date() });
};
```

6. Provide default values for a class component's props

- To provide a default value for props, we can assign the `defaultProps` key on the class before we export it.
- This is especially important if we are keying into values on props that we are expecting. If we don't have a prop the first time we render and try to key in to a property on an undefined value, our code will error out. Assigning default values ensures keying in to these nested values does not result in an error before those props can be passed in to us (perhaps from an asynchronous call to a database or other API)

```js
PetDetails.defaultProps = {
  pet: {
    PetType: {},
  },
};
```

7. Add event listeners to elements

- In our JSX, we can use the camelCased versions of event attributes to assign callbacks to be invoked for those events.
- In the following example, the function `handleSecondNum` will be invoked whenever a change in value is detected in the input, and `add` will be invoked whenever the button is clicked.

```js
<input onChange={this.handleSecondNum} value={num2} placeholder="Second number" />
<button onClick={this.add}>+</button>
```

8. Prevent event default behavior

- When an event is triggered, the a reference to the event is passed to the event handler. By capturing this argument and invoking `preventDefault()` on it, we can prevent the default behavior from occuring.

```js
handleSubmit = (e) => {
  e.preventDefault();
  // ... whatever code we would like our handler to invoke instead of the default form submission behavior
};
```

9. Safely use the `this` keyword within event handlers

- In order to preserve the context of `this` within an event handler, we can either define the function as a fat arrow function, or bind its context within the constructor.
- The reason we need to do one of these approaches is because the event handlers are invoked function style as callbacks, so `this` will be undefined in the browser.

```js
// fat arrow implementation
add = () => {
  const result = this.state.num1 + this.state.num2;
  this.setState({ result });
};

// bind approach
constructor(props){
  super(props);
  // ... other functionality, like setting up state
  this.add = this.add.bind(this);
}

add = function() {
  const result = this.state.num1 + this.state.num2;
  this.setState({ result });
};
```

10. Understand what the React `SyntheticEvent` object is and the role it plays in handling events

- React wraps events triggered in the browser in a class called `SyntheticEvent`
- All of the functionality of the event is preserved, but it provides a standard interface that React can interact with, which is important since different browsers may create event objects slightly differently.

11. Create a React class component containing a simple form

- Below you'll see a `ContactUs` component which uses a form so that a user can submit contact information (we'll expand on this with comments later).
- Notable parts of this component are that a change in the inputs triggers an event listener callback. We want to tie this change in to an update to our component's state, which we are linking to the value.

```js
// ./src/ContactUs.js

import React from "react";

class ContactUs extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    // Prevent the default form behavior
    // so the page doesn't reload.
    e.preventDefault();

    // Retrieve the contact us information from state.
    const { name, email, phone } = this.state;

    // Create a new object for the contact us information.
    const contactUsInformation = {
      name,
      email,
      phone,
      submittedOn: new Date(),
    };

    // For now, just log the contact us information to the console
    // though ideally, we'd persist this information to a database
    // using a REST API.
    console.log(contactUsInformation);

    // Reset the form state.
    this.setState({
      name: "",
      email: "",
      phone: "",
    });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={this.onChange}
              value={name}
            />
            {/* The onChange attribute is linked the the event listener this.onChange, which is triggered whenever we type in the input */}
            {/* The value for each input is linked to the state's key associated with this field */}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="text"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              name="phone"
              type="text"
              onChange={this.onChange}
              value={phone}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactUs;
```

12. Define a single event handler method to handle `onChange` events for multiple `<input>` elements

- By utilizing the `name` attribute of our form's components, we can get a reference to which part of state we are trying to update from the event's target, just like how we are getting the value.
- In our call to setState, we use brackets around the name in order to evaluate the key, instead of creating/updating a key that is literally called `name`

```js
// event handler
onChange = (e) => {
  const { name, value } = e.target;
  this.setState({ [name]: value });
};

// in our form
// The div is being used to collect the label and input into one container for easier styling (there's no functional purpose to it)
<div>
  <label htmlFor="phone">Phone:</label>
  <input
    id="phone"
    name="phone"
    type="text"
    onChange={this.onChange}
    value={this.state.phone}
  />
  <input
    id="name"
    name="name"
    type="text"
    onChange={this.onChange}
    value={this.state.name}
  />
</div>;
```

13. Add a `<textarea>` element to a form

- Textareas are actually easier and more consistent to work with within React than their standard HTML counterparts.
- In HTML, the content of textareas are the values, the value is between the opening and closing tags.
- In React, we treat the value as an attribute just like our input tags, making our textarea a self-closing tag:

```js
<div>
  <label htmlFor="comments">Comments:</label>
  <textarea
    id="comments"
    name="comments"
    onChange={this.onChange}
    value={comments}
  />
</div>
```

- In practice, this means we can treat `textarea` tags just like a regular `input` tag in React

14. Add a `<select>` element to a form

- In React, the value associated with our `select` reflects which option has been selected.
- In the following example, we map over many options for a `phoneType` and create a new `option` tag for each type.
- The `select` has many similarities to `input` in that we can assign an event listener to onChange, and a name and value so that our event handler can update the appropriate key in our state.

```js
<div>
  <label htmlFor="phone">Phone:</label>
  <input
    id="phone"
    name="phone"
    type="text"
    onChange={this.onChange}
    value={phone}
  />
  <select name="phoneType" onChange={this.onChange} value={phoneType}>
    <option value="">Select a phone type...</option>
    {this.props.phoneTypes.map((phoneType) => (
      <option key={phoneType}>{phoneType}</option>
    ))}
  </select>
</div>
```

15. Implement form validations

- In order to validate user input, we can track any validation errors related to the form as an array in our component's state.
- When we attempt to submit our form, we can run our validations and put any error messages that we want to display in an array.
- If the array has any content, we know that at least one of our validations failed. Instead of sending off our request to our server, we can set our component's state to include these error messages.
- In our render method, if our state has any errors to display, we can show them to the user directly within the component.
- Below is a simplified version of our `ContactUs` component, with validations for name and email.

```js
// Our custom validate functions checks that a name and email are both present. If not, it pushes a descriptive message into the array that it returns.
validate(name, email) {
  const validationErrors = [];

  if (!name) {
    validationErrors.push('Please provide a Name');
  }

  if (!email) {
    validationErrors.push('Please provide an Email');
  }

  return validationErrors;
}

// Our submit event handler invokes our validate function. If we had errors, it sets the state of our component with these errors. If we didn't it processes the submission like normal
onSubmit = (e) => {
  e.preventDefault();

  const { name, email } = this.state;

  // Get validation errors.
  const validationErrors = this.validate(name, email);

  // If we have validation errors...
  if (validationErrors.length > 0) {
    // Update the state to display the validation errors.
    this.setState({ validationErrors });
  } else {
    // Create a new object for the contact us information.
    const contactUsInformation = {
      name,
      email,
    };

    // For now, just log the contact us information to the console
    // though ideally, we'd persist this information to a database
    // using a REST API.
    console.log(contactUsInformation);

    // Reset the form state.
    this.setState({
      name: '',
      email: '',
      validationErrors: [],
    });
  }
}

// Our render function checks to see if our validationErrors slice of state has any content (length > 0)
// If it does, the second part of the conditional is evaluated and returned, which displays a div that houses each error message
render() {
    const { name, email, validationErrors } = this.state;

    return (
      <div>
        <h2>Contact Us</h2>
        { validationErrors.length > 0 && (
            <div>
              The following errors were found:
              <ul>
                {validationErrors.map(error => <li key={error}>{error}</li>)}
              </ul>
            </div>
          )
        }
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input id='name' name='name' type='text' onChange={this.onChange} value={name} />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input id='email' name='email' type='text' onChange={this.onChange} value={email} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
```

16. Understand the lifecycle of a React component

- When we render a React component, we follow a specific order of events
  1. Our constructor function is invoked
  2. We render our component
  3. Our `componentDidMount` method is invoked
  4. If we receive any new props, our state changes by invoking `setState`, or our parent rerenders, our `render` function is invoked, then `componentDidUpdate` (which itself could trigger any of these events and another rerender)
  5. Before our component is taken off of the page, our `componentWillUnmount` function is invoked

17. Recall that the commonly used component lifecycle methods include `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`

18. Use the `componentDidMount` component lifecycle method to fetch data from an API

- We will often want our component to get data from an outside source to then display to the user. This can be an API call to our own server to get database information, or to a third-party API.
- In our `componentDidMount` function, we can invoke an ajax function to get this information.
- In the following example, we're waiting for a response, then setting our state with the retrieved data, triggering a rerender of our component (allowing us to display the new content that we didn't previously have to the user)

```js
componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.pollWeather);
  }

  // This functionality of getting the weather data is broken our from the componentDidMount function for clarity. It could have just as easily all been within the same function, but making this helper function makes it easier to parse what is happening.
  pollWeather = (location) => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    const params = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    };

    /* Remember that it's unsafe to expose your API key! In production,
    you would definitely save your key in an environment variable.
    To keep API keys simple during the development of your project,
    you can set an `apiKey` variable in this file for now. */
    const apiKey = '???';

    url += toQueryString(params);
    url += `&APPID=${apiKey}`;

    // We wait for our response, parse the data, then invoke setState, triggering a rerender.
    fetch(url)
      .then((res) => res.json())
      .then((weather) => this.setState({ weather }));
  }
```

## React Router Objectives

1. Use `<BrowserRouter>` to provide your application access to the `react-router-dom` library.

- The `BrowserRouter` component will pass down props related to the user's url, history, and path (including parameters), to any nested component.
- After adding `react-router-dom` to our application (`npm install react-router-dom@^5.1.2`, or similar/newer version), we can import the `BrowserRouter` component and nest our app's component inside of it:

```js
import { BrowserRouter } from "react-router-dom";
import Rainbow from "./components/Rainbow";

const Root = () => (
  <BrowserRouter>
    <Rainbow />
  </BrowserRouter>
);
```

2. Use `<Route>` to connect specific URL paths to specific components you want rendered.

- Inside of our `BrowserRouter` (most likely inside of our main component that we nested), we can use `Route` components in order to only render components when we have navigated to a specific path.
- `Route` takes specific props to indicate what to render and when:
  - `component`: Used to reference the component that is to be rendered at the specified path
  - `path`: Specifies what path the component will be rendered at (such as `/` or `/users`)
  - `exact`: An optional flag. If it is present, the component will only be rendered at the exact path specified. If it is not present. The component will be rendered as long as the user's path begins with the provided `path` argument.
  - `render`: Can be used instead of the `component` prop. One main difference between the two is that `render` takes in a callback function to be invoked instead of a component directly. The other main difference is that whenever a `Route` renders, a `component` will be remounted, but a function passed to `render` will just be updated and rerendered. `render` can also be useful if we want to pass props to the component our route is rendering, since we can have our callback function return the component with the props passed in.

```js
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App.js";
import Users from "./Users.js";

const Root = () => {
  const users = {
    1: { name: "Andrew" },
    2: { name: "Raymond" },
  };

  return (
    <BrowserRouter>
      {/* The BrowserRouter can only have one child, so we wrapped our Routes in a div */}
      <div>
        <h1>Hi, I'm Root!</h1>
        {/* The `exact` flag is ensuring our App component is only rendered at `/` */}
        {/* If we didn't include it, App would be rendered at each route that starts with `/` (ie every page) */}
        <Route exact path="/" component={App} />
        {/* Using render instead of component because what we want to render is so simple */}
        <Route path="/hello" render={() => <h1>Hello!</h1>} />
        {/* Using render instead of component because we want to pass a `users` prop to Users */}
        <Route path="/users" render={() => <Users users={users} />} />
        {/* We want to have access to the userId param captured by the Route, so we are
        spreading our props that Route creates and giving Uers access to all of them. */}
        {/* If we only wanted Users to have access to the userId and not everything that Route creates,
        we could pass it specifically: <Users users={users} userId={props.match.params.userId} /> */}
        <Route
          path="/users/:userId"
          render={(props) => <Users users={users} {...props} />}
        />
      </div>
    </BrowserRouter>
  );
};
```

3. Use `<Switch>` to wrap several Route elements, rendering only one even if several match the current URL.

- By wrapping our `Routes` in a `Switch` component, we can ensure that only one `Route` will be rendered.
- Only the first `Route` that has a matching `path` will be rendered, even if later routes also match.
- Since order matters in a `Switch` component, we can set up our routes to perform such actions as responding to more generic routes down the line, or providing a 404 page if none of our routes matched.

```js
import { Route, Switch } from "react-router-dom";

// Other component code removed for brevity

<Switch>
  <Route exact path="/users" render={() => <Users users={users} />} />
  <Route path="/hello" render={() => <h1>Hello!</h1>} />
  <Route exact path="/" component={App} />
  <Route render={() => <h1>404: Page not found</h1>} />
</Switch>;
```

4. Use React Router's `match` prop to access route path parameters.

- We can use route _wildcards_ in order to capture values from the path that the user has navigated to.
- In React's routes, we can use a `:` to indicate that we are capturing the value as a parameter.
  - The path `/users/:userId/posts` will capture the value between `/users/` and `/posts` and make it available to us under the `match` prop that `BrowserRouter` creates for us.
  - If we navigate to `/users/7/posts`, the component that was rendered by our `Route` will be given access to `7` through `props.match.params.userId`

```js
// ./src/App.js

// App component code omitted for brevity
// We want to make sure we pass all of the props that BrowserRouter gave us to Profile, in addition to the new `users` prop
<Route
  path="/users/:userId"
  render={(props) => <Profile users={users} {...props} />}
/>
```

```js
// ./src/Profile.js
import React from "react";

const Profile = ({ users, match: { params } }) => {
  // In a real-world scenario, you'd make a call to an API to fetch the user,
  // instead of passing down and keying into a `users` prop.

  // If we hadn't destructured our props above, we would access our userId through props.match.params.userId and users through props.users
  // Overall we would have
  // const user = props.users[props.match.params.userId]
  // You can see from this how destructuring can make your code more clear

  const user = users[params.userId];

  return (
    <div>
      The user's id is {params.userId} and the user's name is {user.name}.
    </div>
  );
};

export default Profile;
```

- `match` also gives us access to a couple of other useful values:
  - `url`: The url that matched the specified route, ie `/users/1`
  - `path`: The path that was matched without wildcards filled in, ie `/users/:userId`
  - `isExact`: a boolean that indicates if this component was rendered because our path was exactly matching the specified route path, ie for a `Route` with path `/users/:userId`, would return true `true` if our user is at `/users/1`, but false if they are at `/users/1/posts`

5. Use `<Link>` or `<NavLink>` to create links with absolute paths to routes in your application (like `/users/1`).

- In order for us to make a link to a path within our application, we can import either `NavLink` or `Link` from `react-router-dom`.
- Either component takes in a `to` prop that indicates where we would like to send the user. The content between the open and close tags is the text to be displayed in the link.
- A `NavLink` is different from a `Link` in that it will apply a class name (default is `active`) to a link if the user's location currently matches the `to` path.
  - We can specify that we only want this class to be added at the exact route by adding in the `exact` flag
  - We can alter what class gets added by setting the `activeClassName` prop. In the below example we added `violet` instead of the default `active` class when navigating to `/violet` (maybe we already have a `violet` CSS class selector that changes the color and font-weight for some `violet` components, for example).

```js
import { NavLink, Link } from 'react-router-dom';

<NavLink exact to="/red">Red</NavLink>
<NavLink to="/green">Green</NavLink>
<NavLink exact to="/blue">Blue</NavLink>
<NavLink activeClassName="violet" to="/violet">Violet</NavLink>
```

6. Use `<Redirect>` to redirect a user to another path (i.e. a login page when the user is not logged in).

- A `Redirect` component, imported from `react-router-dom`, will automatically push a user to a different location.
- This functionality is mostly used with a conditional to determine whether a user should have access to some component.
- In the below example, we are only rendering our `Home` component when our props indicate that we are logged in. If we aren't logged in, we are sending the user to the login page.

```js
import { Route, Redirect } from `react-router-dom`;

import Home from './Home.js';

// Component details omitted for brevity

<Route
  exact path="/"
  render={() => (this.props.currentUser ? <Home /> : <Redirect to="/login" />)}
/>
```

7. Use React Router's `history` prop to update a browser's URL programmatically.

- In addition to links, we can react to events happening by pushing a user to a new location.
- We can use the `push` or `replace` methods on `history` to send the user to a new location.
  - `push` adds the new location to the history stack
  - `replace` changes the current location in the stack to the new one, acting as if the user was never here if they use the back button on their browser.

```js
addNewItem = (item) => {
  // If the user tries to add a tomato the the Vegetable section, push them over to the Fruit section, otherwise, add the item like usual
  if (item.name.toLowerCase() === "tomato" && this.props.type === "Vegetable") {
    this.props.history.push("/fruits");
  } else {
    let newItems = this.state.items.concat(item);
    this.setState({ items: newItems });
  }
};
```

8. Understand what nested routes are.

- Nested routes are routes that are created within other components, after our application has already been initialized.
- We are not bound to creating all of our routes in one location, but instead can build our routes within other components, utilizing the path that the user has navigated to.
- If we have a route to `/users/:userId` that renders a Profile component, we can have our Profile component render routes to `/users/:userId/posts` and `/users/:userId/photos`

9. Be able to use React Router to create and navigate nested routes.

- Within our Profile component (which is rendered at `/users/:userId`), we can make nested routes to our UserPosts and UserPhotos components. This will allow us to render these components within our Profile component based on our url.

```js
const Profile = (props) => {
  // Custom call to database to fetch a user by a user ID.
  const user = fetchUser(props.match.params.userId);
  const { name, id } = user;

  return (
    <div>
      <h1>Welcome to the profile of {name}!</h1>

      {/* Links to a specific user's posts and photos */}
      <Link to={`/users/${id}/posts`}>{name}'s Posts</Link>
      <Link to={`/users/${id}/photos`}>{name}'s Photos</Link>

      {/* Routes to a specific user's posts and photos */}
      <Route path="/users/:userId/posts" component={UserPosts} />
      <Route path="/users/:userId/photos" component={UserPhotos} />
    </div>
  );
};
```

10. Know how to use the React Router `match` prop to generate links and routes.

- By utilizing our match's `url` and `path`, we can build out nested routes and links based on our current location without having to hard code those paths.
- If our Profile component is rendered at multiple urls, this also allows our nested routes to maintain the beginning path no matter where it was rendered from.

```js
// Destructure `match` prop
const Profile = ({ match: { url, path, params }}) => {

  // Custom call to database to fetch a user by a user ID.
  const user = fetchUser(params.userId);
  const { name, id } = user;

  return (
    <div>
      <h1>Welcome to the profile of {name}!</h1>

      {/* Replaced `/users/${id}` URL with `props.match.url` */}
      <Link to={`${url}/posts`}>{name}'s Posts</Link>
      <Link to={`${url}/photos`}>{name}'s Photos</Link>

      {/* Replaced `/users/:userId` path with `props.match.path` */}
      <Route path={`${path}/posts`} component={UserPosts} />
      <Route path={`${path}/photos`} component={UserPhotos} />
    </div>
  );
};
```

## React Builds Objectives

1. Understand what front-end builds are and why they're needed.

- Front-end builds take our files and convert them into optimized versions that are compatible with execution in browsers.
- Extended file types like JSX, TypeScript, or Sass, which are not recognizable by browsers, are converted into their standard library formats (JavaScript and CSS in these cases).
- New features of languages can be converted to older syntax to ensure compatibility with browsers that have not been updated to understand the new features of the language.
- Code can be minified, removing unnecessary characters and converting to smaller names which may not be easily readable by humans but are more efficient for the browser to interact with.
- Files can be bundled, combining multiple files into fewer, larger files. This reduces the number of fetches that need to be done for resources.

2. Describe at a high level what happens in a Create React App when you run `npm start`.

- Environment variables are loaded
- The list of browsers to support are checked
- The configured HTTP port is checked to ensure that it's available
- The application compiler is configured and created
- `webpack-dev-server` is started
- `webpack-dev-server` compiles your application
- The `index.html` file is loaded into the browser
- A file watcher is started to watch your files, waiting for changes

3. Prepare to deploy a React application into a production environment.

- Environment variables that may be needed by the application can be added to a `.env` file. These variables have to start with the prefix `REACT_APP_` in order for Create React App to process them. Environment variables are useful for values that will change across environments (maybe you want to indicate in your title that you are in a development build in development, but just have the standard title in production, for example)
- In the `package.json`, you can specify which versions of browsers you would like to make your build for. This will affect how your code is transpiled (using older JavaScript syntax for older browsers, etc.). To make these changes, you can adjust the `browserslist` key to indicate which browser versions are acceptable. In general, the default values are going to suit you just fine, but we can increase compatibility (and possibly sacrifice some performance) by building for older browsers.
- Run the `npm run build` script. This will create your production files in a `build` folder. The bundled files that are generated can then be served in a production environment, such as from an express server.
- It's important to note that all of the bundling, transpiling, etc., that occurs when we create a build is also occurring in development, it is just being kept in memory instead of being written to files.

## React Context Objectives

- The first four objectives have small code snippets that focus on each aspect, but the final objective has a full working example. It may be helpful to reference the full example if greater context is helpful.

1. Use React Context to pass down global information.

- In order to create a context for our application, we can import the `createContext` function from `react` and store a reference to the invoked value. This context can then be used to make Provider and Consumer wrapper components.
- We can provide a default value for the context as an argument to `createContext`. This value will be overwritten if we provide a value in the Provider (see below)

```js
import { createContext } from "react";

const ThemeContext = createContext();

export default ThemeContext;
```

2. Create a Provider wrapper component to set a default context.

- We can wrap the component that we want to have the top-most access to our context with a Provider component. Any Consumer component that we want to make (gaining access to our context) must be nested under our Provider, so making this at the highest level that we would need access is important.
- In this example, we want our `App` to be able to react to the `color` key of our context, with a further nested `Profile` component changing the context's value. Because of this, we wrap our `App` in a new component that we make, `AppWithContext`, that returns our `Provider` wrapped component.
- The `value` prop that we pass to our `Provider` will be the value of our context. In this example, we assign the value to be the state of this component. This is an easy way for us to make sure we can update the values and rerender our components.
- By making a function `updateContext` that invokes `setState`, then adding a reference to the function to our state, we can make sure that any component that has access to our context can also update it and trigger a rerender of components that rely on its data.

```js
import React from 'react';
import ThemeContext from './ThemeContext';
import Home from './Home';

const App = ({ color }) => (
	<div id='app' style={{ backgroundColor: `${color}` }}>
		<Home />
	</div>
);

class AppWithContext extends React.Component {
	constructor() {
    super();
    // The updateContext key of our state references the function that is going to invoke setState. Whenever this function is invoked, our state is updated and our component rerenders, triggering an update to our value prop to our Provider and ultimately rerendering our nested components that rely on this data.
		this.state = {
			color: 'white',
			updateContext: this.updateContext
		};
	}

	updateContext = (color) => {
		this.setState({ color });
	};

	render() {
		return (
      {/* The value prop is what we are setting as the value of our context. This is what our Consumer components will ultimately have access to. */}
      <ThemeContext.Provider value={this.state}>
        {/* Here we are passing the color prop directly to app to avoid having to make a Consumer component for this top-level component. */}
				<App color={this.state.color} />
			</ThemeContext.Provider>
		);
	}
}

export default AppWithContext;
```

3. Create a Consumer wrapper component to allow child components to subscribe to a global context.

- Similar to our `Provider` component that set up the value of our context, we can create a `Consumer` component that gets a reference to this value and passes it along as props to the wrapped component.
- In our example, our context has a reference to the `updateContext` function that we made in our `Provider` wrapper, which updates the value of our context. We are passing this function along as a prop to `Profile` so that when we submit our form, we can invoke the function, update our context's value and impact any components that relied on it (namely our top-level `App` component that changed the backgroundColor based on this value).

```js
import React from "react";
import ThemeContext from "./ThemeContext";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };
  }

  updateSelection = (e) => {
    this.setState({ color: e.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.updateContext(this.state.color);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.updateSelection}
          value={this.state.color}
          placeholder="Type a color!"
        />
        <button onClick={this.handleClick}>Submit</button>
      </form>
    );
  }
}

const ProfileWithContext = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => <Profile updateContext={value.updateContext} />}
    </ThemeContext.Consumer>
  );
};

export default ProfileWithContext;
```

4. Use the `static contextType` property to access the global context.

- Instead of creating a context Consumer wrapper, we can also set the `contextType` property of a component class and gain access to a designated context through `this.context` instead of `this.props`.
- This strategy only works for class components, not functional components, which require us to use the Consumer wrapper and use `this.props`.
- In general, since functional components are generally preferred over class components if possible, we will prefer to make a Consumer wrapper, but it's good to be familiar with this alternative approach.

```js
import React from "react";

import ThemeContext from "./ThemeContext.js";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };
  }

  // The static keyword is defining contextType on the whole class
  // We could have also said Profile.contextType = ThemeContext after our class definition
  static contextType = ThemeContext;

  handleClick = (e) => {
    e.preventDefault();
    // Note our use of this.context instead of this.props
    this.context.updateContext(this.state.color);
  };
  // Rest of component class not shown
}

// Instead of using static within the class, we can also assign the property after the class definition
// Profile.contextType = ThemeContext

// Note how we don't use a Consumer wrapper in this implementation, instead exporting the component directly.
export default Profile;
```

5. Update the global context from a nested component.

- Our Provider wrapper component is setting the value of our context to be equal to the component's state. By adding a reference to our updateContext function to this state, we can invoke it anywhere that we have access to context, updating this component's state, which in turn represents a change in the value of our overall context.
- The code block below is a combination of all of the necessary components to make our Pup image update

```js
import React, { createContext } from "react";

// ThemeContext.js
// All that we need to do is invoke createContext in order to set up a basis for our Provider and Consumer wrappers
const ThemeContext = createContext();

// App.js
// We're applying the color from context that was passed as a prop to us from our Provider as a style for our component's backgroundColor
const App = ({ color }) => (
  <div id="app" style={{ backgroundColor: `${color}` }}>
    <Home />
  </div>
);

// This wrapped Provider component can be in the same file as the App component it is wrapping or in its own file, as long as wherever we are trying to render our app we are using this component that has access to our context.
// The state is being used as the value for our context. Anywhere that we are giving access to our context, we will be referencing the values stored here.
// By storing a reference to a function that updates state within state itself, we are then able to update the context anywhere that we have access to it by invoking this function.
class AppWithContext extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "white",
      updateContext: this.updateContext,
    };
  }

  updateContext = (color) => {
    this.setState({ color });
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <App color={this.state.color} />
      </ThemeContext.Provider>
    );
  }
}

// Home.js
// This component has no real functional purpose in this app.
// It was created to show that we can access context at any point in our tree, eliminating the need to thread props down directly from each parent to child in the chain.
const Home = () => (
  <div id="home">
    <Profile />
  </div>
);

// Profile.js
// This component is where the user is interacting in order to change the value of our context.
// By submitting the form, we are invoking the updateContext prop that we received from our Consumer wrapper. This updates the state of our Provider wrapper component, which is where the value of our context is being tracked.
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };
  }

  updateSelection = (e) => {
    this.setState({ color: e.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.updateContext(this.state.color);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.updateSelection}
          value={this.state.color}
          placeholder="Type a color!"
        />
        <button onClick={this.handleClick}>Submit</button>
      </form>
    );
  }
}

// Like with our Provider wrapper, the Consumer wrapper can either be in the same file as the wrapped component and exported instead of it, or it can be in its own file, as long as wherever we intend to use the wrapped component we are referencing this version with Context.
// The value that we are receiving as an argument is the value of our context (the state of our Provider component in this particular example). Here we are destructuring the updateContext key of that state since that is the only part we need access to in Profile, but we also could have just passed the value directly and destructured in the Profile component.
const ProfileWithContext = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => <Profile updateContext={value.updateContext} />}
    </ThemeContext.Consumer>
  );
};
```
