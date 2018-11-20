import { createStore, combineReducers, applyMiddleware } from "redux";
import UserReducer from "./reducers/UserReducer";
import thunk from "redux-thunk";
import JournalReducer from "./reducers/JournalReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  journal: JournalReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
