import {
  getAllUsersFailure,
  getAllUsersStart,
  getAllUsersSuccess,
  loginfailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./userSlice";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getSettingsFailure,
  getSettingsStart,
  getSettingsSucess,
  updateSettingsFailure,
  updateSettingsStart,
  updateSettingsSucess,
} from "./settingsSlice";

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
  dispatch();
};

export const getAllUsers = async (dispatch) => {
  dispatch(getAllUsersStart());
  try {
    const res = await userRequest.get("/allUsers");
    dispatch(getAllUsersSuccess(res.data.data.data));
  } catch (error) {
    dispatch(getAllUsersFailure());
  }
};

export const getSettings = async (dispatch) => {
  dispatch(getSettingsStart());
  try {
    const res = await userRequest.get("/settings");
    dispatch(getSettingsSucess(res.data.data.data));
  } catch (error) {
    dispatch(getSettingsFailure());
  }
};

export const modifySettings = async (dispatch, id, setting) => {
  dispatch(updateSettingsStart()); // set isProcessing flag to true
  try {
    const res = await userRequest.post(`/settings`, setting);
    console.log(res);
    dispatch(updateSettingsSucess({ id, setting: res.data })); // update the state with the new setting object
  } catch (error) {
    dispatch(updateSettingsFailure()); // set error flag to true
  }
};
