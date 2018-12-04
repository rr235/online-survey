import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './style.scss';
import Button from '../../atoms/Button';

class QuestionSummary extends Component {
  render() {
    return (
      <div>
        <div className={style.question}>{this.props.question}</div>
        <div className={style.answer}>{this.props.answer}</div>
        {this.props.viewUrl && (
          <Link to={this.props.viewUrl}>
            <Button text="view question" className="primary" />
          </Link>
        )}
      </div>
    );
  }
}

export default QuestionSummary;
