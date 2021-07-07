/* eslint-disable import/no-anonymous-default-export */
import apiClient from "../apiClient";

const subscribe = async (body) => {
  try {
    return await apiClient.post("/mailList/add", body);
  } catch (error) {
    return 500;
  }
};

export default {
  subscribe,
};
