

import React from 'react';
import { shallow } from 'enzyme';
import Game from './game';
import '../setupTests';

describe('Game component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<Game />);
  });
});
