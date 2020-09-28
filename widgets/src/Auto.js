import React from 'react';

class Auto extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      inputVal: ''
    }
  }

  handleInput = (e) => {
    this.setState({inputVal: e.target.value});
  }

  handleClick = (e) => {
    this.setState({inputVal: e.target.innerText});
    e.preventDefault();
  }

  render() {

    return (
    <>
      <input id='name' name='name' type='text' onChange={this.handleInput} value={this.state.inputVal} />
      <ul onClick={this.handleClick}>
        {this.props.names.filter(name =>
          <li key={name}>{name.startWith(String(this.state.inputVal))}</li>
        )}

      </ul>
    </>
    )
  }
}



export default Auto;
