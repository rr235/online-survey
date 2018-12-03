import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import ProgressBar from '../atoms/ProgressBar';
import QuestionAnswer from '../organisms/QuestionAnswer';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a progress bar', () => {
  expect(wrapped.find(ProgressBar).length).toEqual(1);
});

it('shows a question and answer block', () => {
  expect(wrapped.find(QuestionAnswer).length).toEqual(1);
});
