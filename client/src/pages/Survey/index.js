import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBar from '../../components/atoms/ProgressBar';
import QuestionAnswer from '../../components/organisms/QuestionAnswer';
import Button from '../../components/atoms/Button';
import { fetchQuestions, nextQuestion } from '../../actions';

class Survey extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  renderQuestions() {
    const active = this.props.survey.active;
    return this.props.survey.questions
      .filter(question => question.id === active)
      .map((question, index) => (
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

  renderButton(prop, text) {
    return prop ? (
      <Button
        text={text}
        className="primary"
        onClick={() => this.props.nextQuestion(prop)}
      />
    ) : null;
  }

  render() {
    return (
      <div>
        <ProgressBar />
        {this.renderQuestions()}
        {this.renderButton(this.props.survey.prevQuestion, 'previous')}
        {this.renderButton(this.props.survey.nextQuestion, 'next')}
      </div>
    );
  }
}

function mapStateToProps({ survey }) {
  return { survey };
}

export default connect(
  mapStateToProps,
  { fetchQuestions, nextQuestion }
)(Survey);
