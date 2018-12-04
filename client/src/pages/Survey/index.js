import React, { Component, Fragment } from 'react';
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
    this.props.fetchQuestions(
      this.props.match.params.id,
      this.props.cookies.get('questions')
    );
  }

  onChangeHandler(e) {
    this.props.saveAnswer(e.target.value);
    const {
      cookies,
      survey: { questions }
    } = this.props;
    cookies.set('questions', questions, { path: '/' });
  }

  questionChangeHandler(prop) {
    this.props.nextQuestion(prop);
  }

  renderQuestions() {
    const active = this.props.survey.active;
    return this.props.survey.questions.map((question, index) => {
      if (question.id === active) {
        return (
          <Fragment key={index}>
            <div className={style.progress}>
              <ProgressBar index={index + 1} total={this.props.survey.total} />
            </div>
            <div className={style.qa}>
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
          </Fragment>
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
      <div className={style.wrapper}>
        {this.renderQuestions()}
        <div className={style.nav}>
          <div className={style.navContent}>
            <div className={[style.link, style.justifyStart].join(' ')}>
              {this.renderButton(this.props.survey.prevQuestion, 'previous')}
            </div>
          </div>
          <div className={style.navContent}>
            <div className={[style.link, style.justifyCenter].join(' ')}>
              <Link to="/summary">
                <Button text="Summary" className="primary" />
              </Link>
            </div>
          </div>
          <div className={style.navContent}>
            <div className={[style.link, style.justifyEnd].join(' ')}>
              {this.renderButton(this.props.survey.nextQuestion, 'next')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ survey }, { cookies }) {
  return { survey, cookies };
}

export default connect(
  mapStateToProps,
  { fetchQuestions, nextQuestion, saveAnswer }
)(Survey);
