import {
  TRIGGER_HEROKU_DYNOS,
} from "../../actionTypes";
import coreService from "../../../services/core";

export const triggerDynos = (payload) => async (dispatch) => {
  try {
    const { status } = await coreService.triggerHerokuDynos();
    if (status === 200) {
      dispatch({ type: TRIGGER_HEROKU_DYNOS, payload: { isDynosUp: true } });
    }
  } catch (error) {
    dispatch({ type: TRIGGER_HEROKU_DYNOS, payload: { isDynosUp: false } });
  }
};
