import 'https://unpkg.com/react@16/umd/react.development.js';


export const Clue = (props) => React.createElement(
  'section',
  { className: "clue"},
  React.createElement('h1',  { className: 'clue__title'}, `Clue# ${props.id}`),
  React.createElement('div', { className: 'clue__question'}, props.question),
  React.createElement('div', { className: 'clue__catagory'}, props.catagory.title),
  React.createElement('div', { className: 'clue__amount'}, `$${props.value}`)
);


Clue.defaultProps = {
  id: '',
  catagory: { title: ''},
  question: 'loading...',
  value: '???',
}
