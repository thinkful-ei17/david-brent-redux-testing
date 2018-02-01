

import React from 'react';
import { shallow } from 'enzyme';
import GuessSection from './guess-section';

import '../setupTests';

describe('GuessSection component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<GuessSection />);
  });
});
