import axios from 'axios';
import { FETCH_QUESTIONS, NEXT_QUESTION, SAVE_ANSWER } from './types';

export const fetchQuestions = activeId => dispatch => {
  axios.get('/api/questions').then(res => {
    dispatch({
      type: FETCH_QUESTIONS,
      payload: res.data
    });
    dispatch(nextQuestion(activeId)); // sets the active id
  });
};

export const nextQuestion = next => dispatch => {
  dispatch({ type: NEXT_QUESTION, payload: next });
};

export const saveAnswer = val => dispatch => {
  dispatch({ type: SAVE_ANSWER, payload: val });
};
