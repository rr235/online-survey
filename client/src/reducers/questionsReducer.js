import { FETCH_QUESTIONS } from '../actions/types';

export default function(state = { questions: [] }, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return action.payload;
    default:
      return state;
  }
}
