import React, { Component } from 'react';

class RadioButtons extends Component {
  renderOptions() {
    return this.props.options.map((option, index) => {
      const id = `${this.props.name}-${index}`;
      return (
        <span key={id}>
          <input
            type="radio"
            name={this.props.name}
            value={option.value}
            id={id}
          />
          <label htmlFor={id}>{option.text}</label>
        </span>
      );
    });
  }

  render() {
    return <>{this.renderOptions()}</>;
  }
}

export default RadioButtons;
