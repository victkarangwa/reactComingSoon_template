/* eslint-disable import/no-anonymous-default-export */
import { SUBSCRIBE } from "../actionTypes";

export const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBSCRIBE:
      return {
        ...state,
        userSubscription: { ...payload.userSubscription, ...payload },
      };
    default:
      return state;
  }
};
