import React from "react";

class Simple extends React.Component {
  constructor() {
    super();
    this.state = {
      names: ["Joanna", "Jeff"],
      inputValue: "",
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { names, inputValue } = this.state;
    console.log(names);
    this.setState({ names: [...names, inputValue] });
  };

  render() {
    const { names, inputValue } = this.state;
    return (
      <>
        {names.map((name, i) => (
          <h1 key={`${name}${i}`}>{`${name}`}</h1>
        ))}

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="addName">Add a Name</label>
          <input onChange={this.handleChange} value={inputValue} id="addName" />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default Simple;
