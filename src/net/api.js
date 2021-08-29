import axios from "axios";
import qs from "qs";

const BASE_URL = process.env.NODE_ENV === "development" ? "/" : "/api";

export const http = axios.create({
  baserURL: BASE_URL,
  headres: {
    "Content-type": "application/json",
  },
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: "indices", allowDots: true });
  },
});

http.interceptors.request.use(async (config) => {
  const token = await localStorage.getItem("Authorization");
  if (token) {
    config.headres = {
      ...config.headres,
      token,
    };
  }
  return config;
});

http.interceptors.response.use(({ data }) => {
  if (data.success) {
    return data.data;
  } else {
    throw data.message;
  }
});
