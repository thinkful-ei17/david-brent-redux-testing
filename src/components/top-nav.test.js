

import React from 'react';
import { shallow, mount } from 'enzyme';
import { TopNav } from './top-nav';
import { restartGame } from '../actions';

import '../setupTests';

describe('TopNav component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<TopNav />);
  });
  it('Should dispatch restartGame on click', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<TopNav dispatch={dispatch} />);
    const link = wrapper.find('.new');
    link.simulate('click');
    expect(dispatch).toHaveBeenCalledWith(restartGame(expect.any(Number)));
  });
});
