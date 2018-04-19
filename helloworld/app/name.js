
import React from 'react';

const names = ['wang', 'shuai', 'dala'];
class Name extends React.Component {
    render() {
        return (
            <div>
                <Sex name="my name is " />
                {
                    names.map(function(name){
                        return (
                            <h3 key={name}>Hello, {name}</h3>
                        )
                    })
                }
            </div>
        )
    }
}

class Sex extends React.Component{
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default Name;