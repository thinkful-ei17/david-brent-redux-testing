

import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';
import '../setupTests';

describe('Header component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<Header />);
  });
});
