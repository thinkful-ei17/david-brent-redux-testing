

import React from 'react';
import { shallow } from 'enzyme';
import { TopNav } from './top-nav';

import '../setupTests';

describe('TopNav component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<TopNav />);
  });
});
