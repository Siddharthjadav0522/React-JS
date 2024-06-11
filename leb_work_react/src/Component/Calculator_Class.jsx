import React, { Component } from 'react';

class Calculator_class extends Component {
    constructor() {
        super();
        this.state = {
            num1: "",
            num2: "",
            result: 0
        };
    }
    
    handleform = (e) => {
       e.preventDefault()
   }
    handleNum1Change = (e) => {
        this.setState({ num1: parseFloat(e.target.value) });
    }

    handleNum2Change = (e) => {
        this.setState({ num2: parseFloat(e.target.value) });
    }

    add = () => {
        this.setState({ result: this.state.num1 + this.state.num2 });
    }

    subtract = () => {
        this.setState({ result: this.state.num1 - this.state.num2 });
    }

    multiply = () => {
        this.setState({ result: this.state.num1 * this.state.num2 });
    }

    divide = () => {
        this.setState({ result: this.state.num1 / this.state.num2 });
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleform}>
                    <h2>Class base Componet Programe</h2>
                    <input type="number" placeholder='Enter Number' value={this.state.num1} onChange={this.handleNum1Change} />
                    <input type="number" placeholder='Enter Number' value={this.state.num2} onChange={this.handleNum2Change} /><br /><br />
                    <button onClick={this.add}>Add</button>
                    <button onClick={this.subtract}>Subtract</button>
                    <button onClick={this.multiply}>Multiply</button>
                    <button onClick={this.divide}>Divide</button>
                    <h2>Result: {this.state.result}</h2>
                </form>
            </>
        );
    }
}

export default Calculator_class;
