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
        const token = getToken();

        console.log(token);

        if (token) {
          const tokenParts = token.split("|");

          if (tokenParts.length === 2) {
            const expirationDate = new Date(parseInt(tokenParts[0]));

            if (expirationDate < new Date()) {
              console.log("token has expired");
              localStorage.removeItem("persist:root");
              window.location.href = "/login";
            } else {
              return Promise.reject(error);
            }
          } else {
            // Handle the case when the token is not in the expected format
            console.log("Invalid token format");
            localStorage.removeItem("persist:root");
            window.location.href = "/login";
          }
        } else {
          // Handle the case when token is not found in localStorage
          return Promise.reject(error);
        }
      } else {
        return Promise.reject(error);
      }
    } catch (e) {
      console.log("An unexpected error occurred: ", e);
      return Promise.reject(error);
    }
  }
);

// userRequest.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     try {
//       if (error.response.status === 401) {
//         localStorage.removeItem("persist:root");
//         window.location.href = "/login";
//       } else {
//         return Promise.reject(error);
//       }
//     } catch (e) {
//       console.log("An unexpected error occurred: ", e);
//       return Promise.reject(error);
//     }
//   }
// );
