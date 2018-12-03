import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBar from '../../components/atoms/ProgressBar';
import QuestionAnswer from '../../components/organisms/QuestionAnswer';
import Button from '../../components/atoms/Button';
import { Link } from 'react-router-dom';
import { fetchQuestions, nextQuestion, saveAnswer } from '../../actions';
import style from './style.scss';

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      index: 1
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
    return this.props.survey.questions.map((question, index) => {
      if (question.id === active) {
        return (
          <div key={index}>
            <ProgressBar index={index + 1} total={this.props.survey.total} />
            <QuestionAnswer
              text={question.text}
              id={question.id}
              name={question.id}
              type={question.type}
              options={question.options ? question.options : []}
              onChange={this.onChangeHandler}
              value={question.value || ''}
            />
          </div>
        );
      } else {
        return null;
      }
    });
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
        {this.renderQuestions()}
        <div className={style.nav}>
          <div className={style.navContent}>
            <div className={[style.link, style.linkLeft].join(' ')}>
              {this.renderButton(this.props.survey.prevQuestion, 'previous')}
            </div>
          </div>
          <div className={style.navContent}>
            <div className={[style.link, style.linkCenter].join(' ')}>
              <Link to="/summary">
                <Button text="Summary" className="primary" />
              </Link>
            </div>
          </div>
          <div className={style.navContent}>
            <div className={[style.link, style.linkRight].join(' ')}>
              {this.renderButton(this.props.survey.nextQuestion, 'next')}
            </div>
          </div>
        </div>
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
