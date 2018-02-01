

import React from 'react';
import { shallow } from 'enzyme';
import { GuessList } from './guess-list';
import '../setupTests';

describe('GuessList component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<GuessList guesses={[]} />);
  });

  it('Passes props correctly', () => {
    const guessArray = [56, 32, 71];
    const wrapper = shallow(<GuessList guesses={guessArray} />);
    expect(wrapper.contains(<li key={1}>{32}</li>)).toEqual(true);
  });
});
