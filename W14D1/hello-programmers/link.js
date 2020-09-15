import 'https://unpkg.com/react@16/umd/react.development.js';

export const Links = () => React.createElement(
  'ul',                                  // <ul
  { id: 'nav-links' },                   //  id="nav-links">
  React.createElement(
    'li',                                // <li
    { className: 'is-selected' },        //  class="is-selected">
    React.createElement(
      'a',                               // <a
      { href: 'https://appacademy.io' }, //  href="...">
      'App Academy'                      //    App Academy
    ),                                   // </a>
  ),                                     // </li>
  React.createElement(
    'li',                                // <li>
    null,
    React.createElement(
      'a',                               // <a
      { href: 'https://aaonline.io' },   //  href="...">
      'a/A Open',                        //  a/A Open
    ),                                   // </a>
  ),                                     // </li>
);
