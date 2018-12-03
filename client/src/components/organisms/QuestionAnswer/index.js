import React, { Component } from 'react';
import Text from '../../atoms/Text';

class QuestionAnswer extends Component {
  getInputType() {
    switch (this.props.type) {
      case 'text':
        return <Text {...this.props} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.text}</label>
        {this.getInputType()}
      </div>
    );
  }
}

export default QuestionAnswer;
