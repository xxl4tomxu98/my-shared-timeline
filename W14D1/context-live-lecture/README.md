# React Context Live Lecture

Welcome to frontend state management! Today you're going to be learning the
basics of using React Context to manage your application's global state. You can
think of the global state as a mini-frontend database where all the data is
stored in a huge POJO. Since your global state acts like a mini-frontend
database, you need to think of how to design the state's **shape** so that it's
organized and easy to navigate.

## 1. State shape

Compare the differences between the POJO shapes below:

```js
const globalState = {
  tasks: {
    1: { id: 1, name: 'buy groceries', isComplete: true },
    2: { id: 2, name: 'learn redux', isComplete: true },
    3: { id: 3, name: 'eat breakfast', isComplete: false },
    4: { id: 4, name: 'practice react', isComplete: false },
  },
  goals: {
    1: { id: 1, description: 'stretch for 30 days straight', isComplete: false },
    2: { id: 2, description: 'do one algorithm a day', isComplete: false },
    3: { id: 3, description: 'drink water every morning', isComplete: false },
    4: { id: 4, description: 'go running everyday', isComplete: true },
  },
};

// Find all incomplete tasks
const incompleteTasks = Object.values(globalState.tasks).filter(task => !task.isComplete);

console.log(incompleteTasks)
// [{ id: 3, name: 'eat breakfast', isComplete: false },
//  { id: 4, name: 'practice react', isComplete: false }]

console.log(incompleteTasks.map(task => task.name))
// ['eat breakfast', 'practice react']

// Find all complete goals
const completeGoals = Object.values(globalState.goals).filter(goal => goal.isComplete);
console.log(completeGoals.map(goal => goal.description)) // ['go running everyday']
```

You generally want to avoid setting up super nested state where you have to do a
mix of `dot notation` **and** `array indexing` to access parts of `state`.

```js
const superNestedState = {
  current: [
    {
      tasks: [
        { id: 1, name: 'buy groceries' },
        { id: 2, name: 'learn redux' },
      ],
    },
    {
      goals: [
        { id: 1, description: 'stretch for 30 days straight' },
        { id: 2, description: 'do one algorithm a day' },
        { id: 3, description: 'drink water every morning' },
      ],
    }
  ],
  complete: [
    {
      tasks: [
        { id: 3, name: 'eat breakfast' },
        { id: 4, name: 'practice react' },
      ],
    },
    {
      goals: [
        { id: 4, description: 'go running everyday' },
      ],
    }
  ],
};

// Find a current task
console.log(superNestedState.current[0].tasks[0].name) // buy groceries

// Find a complete goal
console.log(superNestedState.complete[1].goals[0].description) // go running everyday
```

## 2. Create `Button` component

```js
const Button = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // TODO: Update context
  };

  return (
    <button onClick={handleClick}>
      Increase counter
    </button>
  );
}
```

## 3. Render `Button` in `App` component

```js
class App extends React.Component {
  render() {
    return (
      <div id="app">
        <h2>Counter: ?</h2>
        <ButtonWithContext />
      </div>
    );
  }
}
```

## 4. Create `context` for counter

```js
import { createContext } from "react";

const CounterContext = createContext();

export default CounterContext;
```

## 5. Set up context `provider`

```js
class AppWithContext extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      updateCount: this.updateCount,
    };
  }

  updateCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        <App />
      </CounterContext.Provider>
    );
  }
}

export default AppWithContext;
```

## 6. Consume context with `static contextType`

```js
class App extends React.Component {
  static contextType = CounterContext;

  render() {
    return (
      <div id="app">
        <h2>Counter: {this.context.count}</h2>
        <ButtonWithContext />
      </div>
    );
  }
}
```

## 7. Consume context with `consumer` props

```js
const Button = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.updateCount();
  };

  return (
    <button onClick={handleClick}>
      Increase counter
    </button>
  );
}

const ButtonWithContext = () => {
  return (
    <CounterContext.Consumer>
      {(value) => <Button updateCount={value.updateCount} />}
    </CounterContext.Consumer>
  );
};
```

## 8. Pros of React Context

Now that you know how to access context with a `consumer` and the `static
contextType` property, we can go over why React Context and frontend global
state is helpful. Imagine if we didn't have context, we would need to pass the
`updateCount` method as a prop through the `App`, `Child`, `GrandChild`, and
`Button` components just to be used in the nested `Button` component. This is
known as **prop drilling** or **threading**. You should generally avoid **prop
threading** because this couples all the components together:

- The `Button` component is reliant on the `GrandChild` component
- The `GrandChild` component is reliant on the `Child` component
- The `Child` component is reliant on the `App` component
