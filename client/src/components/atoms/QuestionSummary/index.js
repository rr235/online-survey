import React, { Component } from 'react';

class QuestionSummary extends Component {
  render() {
    return (
      <dir>
        <div>{this.props.question}</div>
        <div>{this.props.answer}</div>
      </dir>
    );
  }
}

export default QuestionSummary;
