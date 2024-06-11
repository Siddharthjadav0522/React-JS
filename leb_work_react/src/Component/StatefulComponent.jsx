import React, { Component } from 'react';

class StatefulComponent extends Component {
  state = {
    inputValue: ''
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Stateful Component</h2>
        <input type="text" onChange={this.handleChange} placeholder="Enter text" />
        <p>Value: {this.state.inputValue}</p>
      </div>
    );
  }
}

export default StatefulComponent;