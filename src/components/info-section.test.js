

import React from 'react';
import { shallow } from 'enzyme';
import InfoSection from './info-section';
import '../setupTests';

describe('InfoSection component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<InfoSection />);
  });
});

