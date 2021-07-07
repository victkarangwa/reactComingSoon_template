import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import initialState from "./initialState";

const middleware = applyMiddleware(thunk);

// Disable redux devtools in production environment
const composer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(middleware)
    : middleware;

const store = createStore(rootReducer, initialState, composer);

export default store;
