

import React from 'react';
import { shallow } from 'enzyme';
import { Feedback } from './feedback';

import '../setupTests';

describe('Feedback component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<Feedback />);
  });
});
