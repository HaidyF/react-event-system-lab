// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {
    enteringpassword = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.enteringpassword} ></input>
            </div>
        );
    }
}

export default Keypad;
