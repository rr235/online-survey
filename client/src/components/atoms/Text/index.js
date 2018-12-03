import React, { Component } from 'react';
import styles from './style.scss';

class Text extends Component {
  render() {
    return (
      <textarea
        name={this.props.name}
        id={this.props.id}
        placeholder={this.props.text}
        cols="30"
        rows="10"
      />
    );
  }
}

export default Text;
