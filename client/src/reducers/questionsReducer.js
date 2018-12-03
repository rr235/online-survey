import { FETCH_QUESTIONS, NEXT_QUESTION } from '../actions/types';

export default function(state = { questions: [] }, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return action.payload;
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
    default:
      return state;
  }
}
