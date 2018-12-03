import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  renderOptions() {
    return this.props.options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.text}
      </option>
    ));
  }

  render() {
    return (
      <select
        name={this.props.name}
        id={this.props.id}
        onChange={this.onChangeHandler}
        value={this.props.value}
      >
        {this.renderOptions()}
      </select>
    );
  }
}

export default Dropdown;
