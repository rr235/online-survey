import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Survey from './index';
import Root from '../../Root';
import ProgressBar from '../../components/atoms/ProgressBar';
import QuestionAnswer from '../../components/organisms/QuestionAnswer';
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
      <Survey />
    </Root>
  );
});

afterEach(() => {
  moxios.uninstall();
  wrapped.unmount();
});

it('shows active Question Answer', done => {
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find(QuestionAnswer).length).toEqual(1);
    done();
  });
});

it('shows Progress Bar', done => {
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find(ProgressBar).length).toEqual(1);
    done();
  });
});

it('can show label and text area', done => {
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('label').length).toEqual(1);
    expect(wrapped.find('textarea').length).toEqual(1);
    done();
  });
});

it('shows next button, hides previous button', done => {
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('.next').length).toEqual(1);
    expect(wrapped.find('.previous').length).toEqual(0);
    done();
  });
});

it('shows next question', done => {
  moxios.wait(() => {
    wrapped.update();
    wrapped.find('.next').simulate('click');
    wrapped.update();
    expect(wrapped.find('textarea').length).toEqual(0);
    expect(wrapped.find('select').length).toEqual(1);
    expect(wrapped.find('.next').length).toEqual(1);
    expect(wrapped.find('.previous').length).toEqual(1);
    done();
  });
});
