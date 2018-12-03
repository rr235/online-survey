import React, { Component } from 'react';
import style from './style.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  setClass(type) {
    switch (type.toLowerCase()) {
      case 'primary':
        return style.primary;
      case 'hidden':
        return style.hidden;
      default:
        return style.primary;
    }
  }

  onClickHandler(e) {
    this.props.onClick && this.props.onClick(e);
  }

  render() {
    return (
      <button
        name={this.name}
        id={this.props.id}
        className={this.setClass(this.props.className)}
        onClick={this.onClickHandler}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
