import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionSummary from '../../components/atoms/QuestionSummary';

class Summary extends Component {
  renderQuestionSummary() {
    return this.props.survey.questions.map((question, index) => (
      <QuestionSummary question={question.text} answer={question.value} />
    ));
  }
  render() {
    return (
      <div>
        <h1>Summary View</h1>
        {this.renderQuestionSummary()}
      </div>
    );
  }
}

function mapStateToProps({ survey }) {
  return { survey };
}

export default connect(mapStateToProps)(Summary);
