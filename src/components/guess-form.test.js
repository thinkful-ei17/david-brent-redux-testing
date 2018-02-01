

import React from 'react';
import { shallow, mount } from 'enzyme';
import { GuessForm } from './guess-form';
import { makeGuess } from '../actions';

import '../setupTests';

describe('GuessForm component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<GuessForm />);
  });
});

describe('Dispatches makeGuess when guess is submitted', () => {
  const dispatch = jest.fn();
  const value = 32;
  const wrapper = mount(<GuessForm dispatch={dispatch} />);
  const input = wrapper.find('#userGuess');
  input.instance().value = value;
  const form = wrapper.find('form');
  form.simulate('submit');
  expect(dispatch).toHaveBeenCalledWith(makeGuess(value.toString()));
});

