import axios from "axios";

const BASE_URL = "https://adminapi.mcd.5starcompany.com.ng/api/v1";

const TOKEN = () => {
  if (
    JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
      .currentUser.token
  ) {
    return JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
      .currentUser.token;
  } else { 
    return '';
  }
};

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

userRequest.interceptors.request.use((config) => {
  const token = TOKEN();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

