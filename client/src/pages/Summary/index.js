import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionSummary from '../../components/molecules/QuestionSummary';
import { fetchQuestions } from '../../actions';

class Summary extends Component {
  componentDidMount() {
    this.props.fetchQuestions(
      this.props.match.params.id,
      this.props.cookies.get('questions')
    );
  }

  renderQuestionSummary() {
    return this.props.survey.questions.map((question, index) => (
      <QuestionSummary
        question={question.text}
        answer={question.value}
        viewUrl={`/${question.id}`}
        key={index}
      />
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

export default connect(
  mapStateToProps,
  { fetchQuestions }
)(Summary);
