import { combineReducers, createStore } from "redux";

import authReducer from "./auth/Auth";
import userReducer from "./auth/User";

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const store = createStore(reducer, reduxDevtools);

export default store;