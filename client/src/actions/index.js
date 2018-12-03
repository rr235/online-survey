import axios from 'axios';
import { FETCH_QUESTIONS } from './types';

export const fetchQuestions = () => dispatch => {
  axios.get('/api/questions').then(res =>
    dispatch({
      type: FETCH_QUESTIONS,
      payload: res.data
    })
  );
};
