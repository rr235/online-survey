import React, { Component } from 'react';

class Dropdown extends Component {
  renderOptions() {
    return this.props.options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.text}
      </option>
    ));
  }
  render() {
    return (
      <select name={this.props.name} id={this.props.id}>
        {this.renderOptions()}
      </select>
    );
  }
}

export default Dropdown;
