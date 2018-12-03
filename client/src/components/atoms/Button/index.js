import React, { Component } from 'react';
import style from './style.scss';

class Button extends Component {
  setClass(type) {
    console.log('style', style);
    switch (type.toLowerCase()) {
      case 'primary':
        return style.primary;
      case 'hidden':
        return style.hidden;
      default:
        return style.primary;
    }
  }

  render() {
    return (
      <button
        name={this.name}
        id={this.props.id}
        className={this.setClass(this.props.className)}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
