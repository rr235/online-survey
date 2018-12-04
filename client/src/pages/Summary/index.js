import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionSummary from '../../components/molecules/QuestionSummary';
import { fetchQuestions } from '../../actions';

class Summary extends Component {
  componentDidMount() {
    // TODO: fix cookie injection
    // implement withCookies in page level
    let id = '';
    const props = this.props;
    if (props.match && props.match.params) {
      id = props.match.params.id;
    }
    const cookies = props.cookies ? props.cookies.get('questions') : undefined;
    this.props.fetchQuestions(id, cookies);
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
