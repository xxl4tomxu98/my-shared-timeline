import 'https://unpkg.com/react@16/umd/react.development.js';
import 'https://unpkg.com/react-dom@16/umd/react-dom.development.js';

import { App } from "./App.js";

import { Links } from "./Links.js";



// Creates the HelloWorld first and, then, creates
// the Links
const AllTogether = () => React.createElement(
  'div',
  null,
  React.createElement(App, {className: "my-text"}),
  React.createElement(Links, {className: "my-links"}),
);

const target = document.querySelector('main');
const app = React.createElement(AllTogether, {className: "my-div"});
ReactDOM.render(app, target);


// fetch single random game
// (async () => {
//   const res = await fetch('https://jservice.xyz/api/random-clue');
//   if(res.ok) {
//     const clue = await res.json();
//     console.log(clue);

//     const app = React.createElement(App, { clue });
//     ReactDOM.render(app, target);
//   }
// })();


// fetch a array of random games
(async () => {
  const res = await fetch('https://jservice.xyz/api/random-games/1');
  if(res.ok) {
    const {clues} = await res.json();
    console.log(clues);

    const app = React.createElement(App, { clues });
    ReactDOM.render(app, target);
  }
})();
