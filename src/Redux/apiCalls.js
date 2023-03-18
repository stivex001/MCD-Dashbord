import {
  getAgentsFailure,
  getAgentsStart,
  getAgentsSuccess,
  getAllUsersFailure,
  getAllUsersStart,
  getAllUsersSuccess,
  getResellersFailure,
  getResellersStart,
  getResellersSuccess,
  getUserOverviewFailure,
  getUserOverviewStart,
  getUserOverviewSuccess,
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
import {
  getWalletDataFailure,
  getWalletDataStart,
  getWalletDataSucess,
  getWithdrawalDataFailure,
  getWithdrawalDataStart,
  getWithdrawalDataSucess,
} from "./walletSlice";
import {
  getPendingTransFailure,
  getPendingTransStart,
  getPendingTransSucess,
  getTransHistoryFailure,
  getTransHistoryStart,
  getTransHistorySucess,
  reProcessAllFailure,
  reProcessAllStart,
  reProcessAllSucess,
} from "./pendingTransSlice";

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

export const reProcess = async (dispatch, ids) => {
  dispatch(reProcessAllStart());
  try {
    const res = await userRequest.post("/transactions/resubmit-multiple", { ids, all_type: 'reprocess' })
    if (res.data.success === 1) {
      dispatch(reProcessAllSucess(res.data))
      console.log(res.data);
    }
    else {
      dispatch(reProcessAllFailure())
    }
  } catch (error) {
    dispatch(reProcessAllFailure())
  }
};

// USERS
export const getUsersOverview = async (dispatch) => {
  dispatch(getUserOverviewStart());
  try {
    const res = await userRequest.get("/usersOverview");
    dispatch(getUserOverviewSuccess(res.data.data));
  } catch (error) {
    dispatch(getUserOverviewFailure());
  }
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

export const getAgents = async (dispatch) => {
  dispatch(getAgentsStart());
  try {
    const res = await userRequest.get("/agents");
    dispatch(getAgentsSuccess(res.data.data.data));
  } catch (error) {
    dispatch(getAgentsFailure());
  }
};

export const getResellers = async (dispatch) => {
  dispatch(getResellersStart());
  try {
    const res = await userRequest.get("/resellers");
    dispatch(getResellersSuccess(res.data.data.data));
  } catch (error) {
    dispatch(getResellersFailure());
  }
};

// SETTINGS
export const getSettings = async (dispatch) => {
  dispatch(getSettingsStart());
  try {
    const res = await userRequest.get("/settings");
    dispatch(getSettingsSucess(res.data.data));
  } catch (error) {
    dispatch(getSettingsFailure());
  }
};

export const modifySettings = async (dispatch, id, value) => {
  dispatch(updateSettingsStart()); // set isProcessing flag to true
  try {
    const res = await userRequest.post(`/settings`, id, value);
    dispatch(updateSettingsSucess(res.data)); // update the state with the new setting object
  } catch (error) {
    dispatch(updateSettingsFailure()); // set error flag to true
  }
};

export const getWalletData = async (dispatch) => {
  dispatch(getWalletDataStart());
  try {
    const res = await userRequest.get("/wallets");
    dispatch(getWalletDataSucess(res.data.data.data));
  } catch (error) {
    dispatch(getWalletDataFailure());
  }
};

export const getWithdrawalData = async (dispatch) => {
  dispatch(getWithdrawalDataStart());
  try {
    const res = await userRequest.get("/withdrawals");
    dispatch(getWithdrawalDataSucess(res.data.data.data));
  } catch (error) {
    dispatch(getWithdrawalDataFailure());
  }
};

export const getTransHistoryData = async (dispatch) => {
  dispatch(getTransHistoryStart());
  try {
    const res = await userRequest.get("/transactions");
    dispatch(getTransHistorySucess(res.data.data.data));
  } catch (error) {
    dispatch(getTransHistoryFailure());
  }
};

export const getPendingTransData = async (dispatch) => {
  dispatch(getPendingTransStart());
  try {
    const res = await userRequest.get("/transactions/pending");
    dispatch(getPendingTransSucess(res.data.data.data));
  } catch (error) {
    dispatch(getPendingTransFailure());
  }
};

