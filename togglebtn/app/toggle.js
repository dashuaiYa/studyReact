
import React from 'react';


class Toggle extends React.Component{
    constructor() {
        super();
        this.state = { isToggleOn: true };
        this.clickToggleBtn = this.clickToggleBtn.bind(this);
    }

    clickToggleBtn() {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.clickToggleBtn}>Button</button>
                <h1>Btn State: {this.state.isToggleOn ? 'ON' : 'OFF'}</h1>
            </div>
        )
    }
}

export default Toggle;