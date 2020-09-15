import 'https://unpkg.com/react@16/umd/react.development.js';

import { Clue } from './Clue.js';

export const App = (props) => React.createElement(
  'h1',
  null,
  //React.createElement(Clue, props.clue),
  props.clues.map(clue => React.createElement(Clue, { key: clue.id, ...clue })),
);

App.defaultProps = {
  clues: []
};
