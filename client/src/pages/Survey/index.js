import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBar from '../../components/atoms/ProgressBar';
import QuestionAnswer from '../../components/organisms/QuestionAnswer';
import Button from '../../components/atoms/Button';
import { Link } from 'react-router-dom';
import { fetchQuestions, nextQuestion, saveAnswer } from '../../actions';

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.questionChangeHandler = this.questionChangeHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestions(this.props.match.params.id);
  }

  onChangeHandler(e) {
    this.props.saveAnswer(e.target.value);
  }

  questionChangeHandler(prop) {
    this.props.nextQuestion(prop);
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
          onChange={this.onChangeHandler}
          value={question.value || ''}
        />
      ));
  }

  renderButton(prop, text) {
    return prop ? (
      <Link to={`/survey/${prop}`}>
        <Button
          text={text}
          className="primary"
          onClick={() => this.questionChangeHandler(prop)}
        />
      </Link>
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
  { fetchQuestions, nextQuestion, saveAnswer }
)(Survey);
