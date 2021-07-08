/* eslint-disable import/no-anonymous-default-export */
import apiClient from "../apiClient";

const triggerHerokuDynos = async (body) => {
  return await apiClient.get("/", body);
};

export default {
    triggerHerokuDynos,
};
