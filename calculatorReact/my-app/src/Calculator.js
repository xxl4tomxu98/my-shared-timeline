import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: 0
    }
  }

  handleFirstNum = e => {
    console.log(e)
    this.setState({num1: Number.parseInt(e.target.value)})
  }

  handleSecondNum = e => {
    console.log(e)
    this.setState({num2: Number.parseInt(e.target.value)})
  }

  add = () => {
    this.setState({result: (this.state.num1 + this.state.num2)})
  }

  substract = () => {
    this.setState({result: (this.state.num1 - this.state.num2)})
  }

  multiply = () => {
    this.setState({result: (this.state.num1 * this.state.num2)})
  }

  divide = () => {
    this.setState({result: (this.state.num1 / this.state.num2)})
  }

  clear = () => {
    this.setState({ num1: '', num2: '', result: 0});
  }


  render() {

    const { num1, num2, result } = this.state;

    return (
      <div>
        <h1>Result: {result}</h1>
        <input onChange={this.handleFirstNum} value={num1} />
        <input onChange={this.handleSecondNum} value={num2} />
        <button onClick={this.add} >Add</button>
        <button onClick={this.substract} >Substract</button>
        <button onClick={this.multiply} >Multiply</button>
        <button onClick={this.divide} >Divide</button>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default Calculator;
