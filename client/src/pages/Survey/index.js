import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBar from '../../components/atoms/ProgressBar';
import QuestionAnswer from '../../components/organisms/QuestionAnswer';
import { fetchQuestions } from '../../actions';

class Survey extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  renderQuestions() {
    return this.props.survey.questions.map((question, index) => (
      <QuestionAnswer
        key={index}
        text={question.text}
        id={question.id}
        name={question.id}
        type={question.type}
        options={question.options ? question.options : []}
      />
    ));
  }

  render() {
    return (
      <div>
        <ProgressBar />
        {this.renderQuestions()}
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
)(Survey);
