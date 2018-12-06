import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import Landing from './Landing';

describe('<Landing />', () => {
  it('renders the Landing component', () => {
      const wrapper = shallow(
        <Landing />,
        {context: {}, 
        disableLifecycleMethods: true }
      )
    });
});