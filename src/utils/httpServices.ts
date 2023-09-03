import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    //instead of logging error in the console, use logging as service (sentry)
    console.log(error.response.data.message);
  }
  return Promise.reject(error);
});

axios.interceptors.request.use((config) => {
  config.headers["Access-Control-Allow-Origin"] = "*";
  config.headers["Access-Control-Allow-Methods"] =
    "GET, POST, PUT, DELETE, PATCH";
  config.headers["Access-Control-Allow-Headers"] =
    "Origin, X-Requested-With, Content-Type, Accept";
  return config;
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
