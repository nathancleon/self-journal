import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import JournalSelected from './JournalSelected';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<JournalSelected />', () => {
  it('renders the JournalSelected component', () => {
      const wrapper = shallow(
        <Provider store={store}>
            <JournalSelected />
        </Provider>,
        {context: {}, 
        disableLifecycleMethods: true }
      )
      console.log(wrapper.debug());
    });
});