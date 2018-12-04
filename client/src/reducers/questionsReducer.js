import { FETCH_QUESTIONS, NEXT_QUESTION, SAVE_ANSWER } from '../actions/types';

export default function(state = { questions: [] }, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      const data = action.payload.data;
      if (action.payload.cookieQuestions) {
        data.questions = [...action.payload.cookieQuestions];
      }
      return data;
    case NEXT_QUESTION:
      const question = state.questions.find(
        question => question.id === action.payload
      );
      let newState = {};
      if (question) {
        const { id, nextQuestion, prevQuestion } = question;
        newState = { active: id, nextQuestion, prevQuestion };
      }
      return Object.assign({}, state, newState);
    case SAVE_ANSWER:
      const questions = state.questions.map(question =>
        question.id === state.active
          ? { ...question, value: action.payload }
          : question
      );
      return Object.assign({}, { ...state, questions });
    default:
      return state;
  }
}
