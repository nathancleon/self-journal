import { shallow } from 'enzyme';
import React from 'react';
import App from '../App/App';

describe('<App />', () => {
  const wrapper = shallow(<App />)
  it('should contain App', () => {
    console.log(wrapper.debug());
  })
})