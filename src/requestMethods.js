import axios from "axios";

const BASE_URL = "https://adminapi.mcd.5starcompany.com.ng/api/v1";

const getToken = () => {
  const user = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  );
  return user?.currentUser?.token ?? "";
};

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

userRequest.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

userRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    try {
      if (error.response.status === 401) {
        localStorage.removeItem("persist:root");
        window.location.href = "/login";
      } else {
        return Promise.reject(error);
      }
    } catch (e) {
      console.log("An unexpected error occurred: ", e);
      return Promise.reject(error);
    }
  }
);
