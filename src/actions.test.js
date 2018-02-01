import React from 'react';
import { shallow, mount } from 'enzyme';
import { makeGuess, MAKE_GUESS, restartGame, RESTART_GAME, generateAuralUpdate, GENERATE_AURAL_UPDATE } from './actions';
import reducer from './reducer';
import './setupTests';

describe('Actions', () => {
  describe('restartGame', () => {
    it('Should return the action', () => {
      const correctAnswer = 10;
      const action = restartGame(correctAnswer);
      expect(action.type).toEqual(RESTART_GAME);
      expect(action.correctAnswer).toEqual(correctAnswer);
    });
  });
  describe('makeGuess', () => {
    it('Should return the action', () => {
      const guess = 50;
      const action = makeGuess(guess);
      expect(action.type).toEqual(MAKE_GUESS);
      expect(action.guess).toEqual(guess);
    });
  });
  describe('generateAuralUpdate', () => {
    it('Should return the action', () => {
      const action = generateAuralUpdate();
      expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
  });
});
