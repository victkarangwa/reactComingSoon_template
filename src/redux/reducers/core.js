/* eslint-disable import/no-anonymous-default-export */
import { LOADING_USER, TRIGGER_HEROKU_DYNOS } from "../actionTypes";

export const initialState = {
  loading: false,
  isDynosUp: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Common states
    case LOADING_USER:
      return { ...state, ...payload };
    case TRIGGER_HEROKU_DYNOS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
