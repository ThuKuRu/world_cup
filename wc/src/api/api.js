import axios from "axios";

const axiosClient = axios.create({
  baseURL: `https://project20221-team2-wordcup.onrender.com/api`,
  responseType: "json",
  timeout: 15 * 1000,
});

axiosClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

export default axiosClient;
