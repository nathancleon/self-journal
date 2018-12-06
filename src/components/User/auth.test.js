import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import Login from './Login/Login';
import Register from './Register/Register';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Login />', () => {
  it('Renders without crashing', () => {
      const wrapper = shallow(<Provider store={store}><Login />
            </Provider>,
            {context: {}, 
            disableLifecycleMethods: true }
        )
        console.log(wrapper.debug());
    });
});

describe('<Register />', () => {
  it('Renders without crashing', () => {
      const wrapper = shallow(
        <Provider store={store}>
            <Register />
        </Provider>,
        {context: {}, 
        disableLifecycleMethods: true }
      )
      console.log(wrapper.debug());
    });
});