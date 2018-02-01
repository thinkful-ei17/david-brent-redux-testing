

import React from 'react';
import { shallow } from 'enzyme';
import StatusSection from './status-section';
import '../setupTests';

describe('StatusSection component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<StatusSection />);
  });
});
