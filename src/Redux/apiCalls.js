import {
  loginfailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./userSlice";
import { publicRequest, userRequest } from "../requestMethods";
import { getSettingsFailure, getSettingsStart, getSettingsSucess } from "./settingsSlice";

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

export const getSettings = async (dispatch) => {
  dispatch(getSettingsStart());
  try {
    const res = await userRequest.get("/settings");
    dispatch(getSettingsSucess(res.data.data))
  } catch (error) {
    dispatch(getSettingsFailure())
  }
}
