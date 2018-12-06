import { shallow } from 'enzyme';
import React from 'react';
import Header from '../Headers/Header';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Header />', () => {
  const wrapper = shallow(
    <Provider store={store}>
        <Header />
    </Provider>,
    {context: {}, 
    disableLifecycleMethods: true }
)
  it('should contain Header', () => {
    console.log(wrapper.debug());
  })
})