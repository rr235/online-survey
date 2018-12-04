import React, { Component } from 'react';
import style from './style.scss';

class RadioButtons extends Component {
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
    return this.props.options.map((option, index) => {
      const id = `${this.props.name}-${index}`;
      return (
        <span key={id}>
          <input
            type="radio"
            name={this.props.name}
            value={option.value}
            id={id}
            checked={this.props.value === option.value}
            onChange={this.onChangeHandler}
            className={style.radio}
          />
          <label htmlFor={id} className={style.label}>
            {option.text}
          </label>
        </span>
      );
    });
  }

  render() {
    return <>{this.renderOptions()}</>;
  }
}

export default RadioButtons;
