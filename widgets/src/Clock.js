import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state= {
      time: new Date()
    }
  }

  tick = () => {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }


  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    const { time } = this.state
    return (
    <>
      <h1>Time: {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h1>
      <h1>Date: {time.toDateString()}</h1>
    </>
    )
  }
}



export default Clock;
