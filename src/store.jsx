import { combineReducers, createStore } from "redux";
import authReducer from "./auth/Auth";

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(reducer, reduxDevtools);
