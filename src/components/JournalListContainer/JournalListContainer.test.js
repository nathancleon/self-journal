import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import JournalListContainer from './JournalListContainer';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<JournalListContainer />', () => {
  it('renders the JournalListContainer component', () => {
      const wrapper = shallow(
        <Provider store={store}>
            <JournalListContainer />
        </Provider>,
        {context: {}, 
        disableLifecycleMethods: true }
      )
      console.log(wrapper.debug());
    });
});