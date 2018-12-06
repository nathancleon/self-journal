import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import Banner from './Banner';

describe('<Banner />', () => {
  it('renders the Banner component', () => {
      const wrapper = shallow(
        <Banner />,
        {context: {}, 
        disableLifecycleMethods: true }
      )
    });
});