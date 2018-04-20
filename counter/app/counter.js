

import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {no: 0};
  }

  addCount() {
    this.setState(prevState => ({
      no: 1
    }));
  }

  render() {
    return (
      <div>
        <h1 onClick={this.addCount}>Click Me!!!!</h1>
        <h2>{this.state.no}</h2>
      </div>
    )
  }
}

export default Counter;
