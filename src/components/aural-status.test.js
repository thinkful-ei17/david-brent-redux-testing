

import React from 'react';
import { shallow } from 'enzyme';
import { AuralStatus } from './aural-status';
import '../setupTests';

describe('AuralStatus component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<AuralStatus />);
  });
});
