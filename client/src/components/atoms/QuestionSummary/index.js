import React, { Component } from 'react';
import style from './style.scss';
class QuestionSummary extends Component {
  render() {
    return (
      <div>
        <div className={style.question}>{this.props.question}</div>
        <div className={style.answer}>{this.props.answer}</div>
      </div>
    );
  }
}

export default QuestionSummary;
