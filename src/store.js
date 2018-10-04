import {createStore, combineReducers, applyMiddleware} from 'redux';
import UserReducer from './reducers/UserReducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  user: UserReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;