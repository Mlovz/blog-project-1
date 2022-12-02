import axios from "axios";
// import { getStoredAuthToken } from "shared/authToken";
// "proxy": "http://localhost:5000/api/v1",

const token = "";

export const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token || ""}`,
  },
});

// axios.interceptors.request.use(
//   (conf) => {
//     // you can add some information before send it.
//     // conf.headers['Auth'] = 'some token'
//     return conf;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (err) => {
//     // const status=err.status;
//     const message = err.response.data.message || err.statusText;

//     return Promise.reject(err);
//   }
// );
