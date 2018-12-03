import React, { Component } from 'react';
import Text from '../../atoms/Text';
import Dropdown from '../../atoms/Dropdown';
import RadioButtons from '../../atoms/RadioButtons';

class QuestionAnswer extends Component {
  getInputType() {
    switch (this.props.type) {
      case 'text':
        return <Text {...this.props} />;
      case 'select':
        return <Dropdown {...this.props} />;
      case 'radio':
        return <RadioButtons {...this.props} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.text}</label>
        <div>{this.getInputType()}</div>
      </div>
    );
  }
}

export default QuestionAnswer;
