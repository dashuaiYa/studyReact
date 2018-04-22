

import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {counter: 0};
    this.addCount = this.addCount.bind(this);
  }

  addCount() {
    this.state.counter++;
    this.setState({
      counter: this.state.counter
    });
  }

  render() {
    return (
      <div>
        <h1 onClick={this.addCount}>Click Me!!!!</h1>
        <h2>{this.state.counter}</h2>
      </div>
    )
  }
}

export default Counter;
