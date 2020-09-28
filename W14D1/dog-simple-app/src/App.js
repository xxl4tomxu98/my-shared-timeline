import React from 'react';

const Dog = props =>
  <figure>
    <img src={props.url} alt="dog"/>
    <figcaption>
      {props.url}
    </figcaption>

  </figure>


function App(props) {
  return (
    props.urls.map(url => <Dog key={url} url = {url} /> )
  );
}

App.defaultProps = {
  urls: []
}

export default App;
