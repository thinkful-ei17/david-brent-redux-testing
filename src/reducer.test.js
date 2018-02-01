import React from 'react';
import { shallow, mount } from 'enzyme';
import { makeGuess, MAKE_GUESS, restartGame, RESTART_GAME } from './actions';
import reducer from './reducer';
import './setupTests';

describe('Reducer', () => {
  it('should add new guess to guesses array on make guess action', () => {
    const state = {
      guesses: [],
    };
    const guess = 52;
    const action = makeGuess(guess);
    const newState = reducer(state, action);
    expect(newState.guesses.length).toEqual(state.guesses.length + 1);
  });
  it('should add the correct guess to the guesses array', () => {
    const state = {
      guesses: [],
    };
    const guess = 25;
    const action = makeGuess(guess);
    const newState = reducer(state, action);
    expect(newState.guesses[newState.guesses.length - 1]).toEqual(guess);
    const secondGuess = 99;
    const secondAction = makeGuess(secondGuess);
    const secondState = reducer(newState, secondAction);
    expect(secondState.guesses[secondState.guesses.length - 2]).toEqual(guess);
    expect(secondState.guesses[secondState.guesses.length - 1]).toEqual(secondGuess);
  });
  it('should set an initial state', () => {
    const state = undefined;
    const action = {
      type: 'NOT_A_REAL_ACTION>>>',
    };
    const newState = reducer(state, action);
    expect(newState.guesses).toEqual([]);
    expect(newState.auralStatus).toEqual('');
    expect(newState.feedback).toEqual('Make your guess!');
  });
});
