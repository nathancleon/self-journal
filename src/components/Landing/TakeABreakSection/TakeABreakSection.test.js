import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import TakeABreakSection from './TakeABreakSection';

describe('<TakeABreakSection />', () => {
  it('renders the TakeABreakSection component', () => {
      const wrapper = shallow(
        <TakeABreakSection />,
        {context: {}, 
        disableLifecycleMethods: true }
      )
    });
});