

import React from 'react';
import { shallow } from 'enzyme';
import { GuessCount } from './guess-count';

import '../setupTests';

describe('GuessCount component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<GuessCount />);
  });

  it('Should render props correctly', () => {
    const testCount = 6;
    const wrapper = shallow(<GuessCount guessCount={testCount} />);
    expect(wrapper.contains(<span id="count">{6}</span>)).toEqual(true);
  });
});

