import { notification } from "antd";
import {
  SUBSCRIBE,
  LOADING_USER,
} from "../../actionTypes";
import mailService from "../../../services/mail";

export const subscribe = (payload) => async (dispatch) => {
  dispatch({ type: LOADING_USER, payload: { loading: true } });
  try {
    const { status , response} = await mailService.subscribe(payload);

    if (status === 201) {
      dispatch({
        type: SUBSCRIBE,
        payload: { message: "Your email has been submitted. Thank you!", status: "success" },
      });
      notification.success({
        message: "Your email has been submitted. Thank you!",
      });
    } else{
      const error = response?.data?.error;
      dispatch({
        type: SUBSCRIBE,
        payload: { message: typeof error == "object" ? error[0] : error , status: "fail" },
      });
    }
    dispatch({ type: LOADING_USER, payload: { loading: false } });
  } catch (error) {
    dispatch({ type: LOADING_USER, payload: { loading: false } });
  }
};
