import axios from 'axios';
import { FETCH_QUESTIONS, NEXT_QUESTION } from './types';

export const fetchQuestions = () => dispatch => {
  axios.get('/api/questions').then(res =>
    dispatch({
      type: FETCH_QUESTIONS,
      payload: res.data
    })
  );
};

export const nextQuestion = next => dispatch => {
  dispatch({ type: NEXT_QUESTION, payload: next });
};
