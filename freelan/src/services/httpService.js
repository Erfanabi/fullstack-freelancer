import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
// const BASE_URL = "https://api.profreelancer.ir/api";
// const BASE_URL = "https://finallapp-api.liara.run/api";

const app = axios.create({
  baseURL: BASE_URL,
  // timeout: 1000,
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
