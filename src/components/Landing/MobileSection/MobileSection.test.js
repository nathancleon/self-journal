import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import MobileSection from './MobileSection';

describe('<MobileSection />', () => {
  it('renders the MobileSection component', () => {
      const wrapper = shallow(
        <MobileSection />,
        {context: {}, 
        disableLifecycleMethods: true }
      )
    });
});