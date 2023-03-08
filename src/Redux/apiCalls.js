import {
  loginfailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./userSlice";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/login", user);
    if (res.data.success === 1) {
      dispatch(loginSuccess(res.data));
    } else {
      dispatch(loginfailure());
    }
  } catch (error) {
    dispatch(loginfailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutSuccess());
};

export const reProcessAll = async (dispatch, id) => {
  dispatch()
}
