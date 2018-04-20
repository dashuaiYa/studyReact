import React from 'react';

const names = ['wang', 'shuai', 'dala'];
class Name extends React.Component {
  render() {
    return (<div>
      <Sex tag="my name is "/> {
        names.map(function(name) {
          return (<h3 key={name}>Hello, {name}</h3>)
        })
      }
      <Sex tag="papapa"/>
    </div>)
  }
}

class Sex extends React.Component {
  render() {
    return (<div>
      <p>{this.props.tag}</p>
    </div>)
  }
}

export default Name;
