import React, { Component } from 'react';
import styles from './style.scss';

class Text extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    return (
      <textarea
        name={this.props.name}
        id={this.props.id}
        placeholder={this.props.placeholder || null}
        value={this.props.value || ''}
        onChange={this.onChangeHandler}
        onBlur={this.onChangeHandler}
      />
    );
  }
}

export default Text;
