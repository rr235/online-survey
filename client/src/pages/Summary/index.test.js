import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Summary from './index';
import Root from '../../Root';
import QuestionSummary from '../../components/molecules/QuestionSummary';
import data from './stub.json';

let wrapped;

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('/api/questions', {
    status: 200,
    response: data
  });
  wrapped = mount(
    <Root>
      <Summary />
    </Root>
  );
});

afterEach(() => {
  moxios.uninstall();
  wrapped.unmount();
});

it('shows all questions', done => {
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find(QuestionSummary).length).toEqual(3);
    done();
  });
});
