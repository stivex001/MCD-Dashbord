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
  getUserPerfFailure,
  getUserPerfStart,
  getUserPerfSuccess,
  getUserTransFailure,
  getUserTransStart,
  getUserTransSuccess,
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
  creditUserFailure,
  creditUserStart,
  creditUserSuccess,
  getWalletDataFailure,
  getWalletDataStart,
  getWalletDataSucess,
  getWithdrawalDataFailure,
  getWithdrawalDataStart,
  getWithdrawalDataSucess,
} from "./walletSlice";
import {
  getGmFailure,
  getGmStart,
  getGmSucess,
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
import {
  getGmBlockFailure,
  getGmBlockStart,
  getGmBlockSucess,
  getReversalFailure,
  getReversalStart,
  getReversalSuccess,
  getSearchedReversalFailure,
  getSearchedReversalStart,
  getSearchedReversalSuccess,
  getSearchedTransStart,
  getSearchedTransSuccess,
  getSearchedUserFailure,
  getSearchedUserStart,
  getSearchedUserSuccess,
  getWalletFailure,
  getWalletStart,
  getWalletSucess,
} from "./profileSlice";
import { serverStart, serverFailure, serverSuccess } from "./serverSlice";
import {
  creditFailure,
  creditStart,
  creditSuccess,
  getAirtimeConFailure,
  getAirtimeConStart,
  getAirtimeConSucess,
  getAirtimeCovFailure,
  getAirtimeCovStart,
  getAirtimeCovSucess,
  modifyAirtimeFailure,
  modifyAirtimeStart,
  modifyAirtimeSucess,
} from "./airtimeConverterSlice";

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
    const res = await userRequest.post("/transactions/resubmit-multiple", {
      ids,
      all_type: "reprocess",
    });
    if (res.data.success === 1) {
      dispatch(reProcessAllSucess(res.data));
      console.log(res.data);
    } else {
      dispatch(reProcessAllFailure());
    }
  } catch (error) {
    dispatch(reProcessAllFailure());
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

export const getAllUsers = async (dispatch, page) => {
  dispatch(getAllUsersStart());
  try {
    const res = await userRequest.get(`/allUsers?page=${page}`);
    dispatch(getAllUsersSuccess(res.data.data));
  } catch (error) {
    dispatch(getAllUsersFailure());
  }
};

export const getUserPerformance = async (dispatch, username) => {
  dispatch(getUserPerfStart());
  try {
    const res = await userRequest.get(`/profile/${username}/transactions`);
    dispatch(getUserPerfSuccess(res.data.data));
  } catch (error) {
    dispatch(getUserPerfFailure());
  }
};

export const getUserTrans = async (dispatch, username) => {
  dispatch(getUserTransStart());
  try {
    const res = await userRequest.get(`/profile/${username}/transactions`);
    dispatch(getUserTransSuccess(res.data.data));
  } catch (error) {
    dispatch(getUserTransFailure());
  }
};


export const getSearchedUsers = async (dispatch, username, phoneno) => {
  dispatch(getSearchedUserStart());
  try {
    const res = await userRequest.get(
      `/user-search?user_name=${username}&phoneno=${phoneno}&status&wallet&email&regdate`
    );
    dispatch(getSearchedUserSuccess(res.data.data));
  } catch (error) {
    dispatch(getSearchedUserFailure());
  }
};

export const getAgents = async (dispatch, page) => {
  dispatch(getAgentsStart());
  try {
    const res = await userRequest.get(`/agents?page=${page}`);
    dispatch(getAgentsSuccess(res.data.data));
  } catch (error) {
    dispatch(getAgentsFailure());
  }
};

export const getResellers = async (dispatch, page) => {
  dispatch(getResellersStart());
  try {
    const res = await userRequest.get(`/resellers?page=${page}`);
    dispatch(getResellersSuccess(res.data.data));
  } catch (error) {
    dispatch(getResellersFailure());
  }
};

export const getGmBlockData = async (dispatch, page) => {
  dispatch(getGmBlockStart());
  try {
    const res = await userRequest.get(`/gmblocked?page=${page}`);
    dispatch(getGmBlockSucess(res.data.data));
  } catch (error) {
    dispatch(getGmBlockFailure());
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

// WALLET
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

export const creditUser = async (dispatch, formValue) => {
  dispatch(creditUserStart()); // set isProcessing flag to true
  try {
    const res = await userRequest.post(`/credit-debit`, formValue);
    dispatch(creditUserSuccess(res.data));
    console.log(res.data);
  } catch (error) {
    dispatch(creditUserFailure()); // set error flag to true
  }
};

//  TRANSACTIONS PAGE
export const getTransHistoryData = async (dispatch, page) => {
  dispatch(getTransHistoryStart());
  try {
    const res = await userRequest.get(`/transactions?page=${page}`);
    dispatch(getTransHistorySucess(res.data.data));
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

export const getGmData = async (dispatch, page) => {
  dispatch(getGmStart());
  try {
    const res = await userRequest.get(`/gmhistory?page=${page}`);
    dispatch(getGmSucess(res.data.data));
  } catch (error) {
    dispatch(getGmFailure());
  }
};

export const getSearchedTrans = async (dispatch, username, phoneno, ref) => {
  dispatch(getSearchedTransStart());
  try {
    const res = await userRequest.get(
      `/transactions/find-transaction?user_name=${username}&phoneno=${phoneno}&reference=${ref}&amount&transaction_type&date`
    );
    dispatch(getSearchedTransSuccess(res.data.data));
  } catch (error) {
    dispatch(getSearchedTransSuccess());
  }
};

export const getRevesal = async (dispatch, id) => {
  dispatch(getSearchedReversalStart());
  try {
    const res = await userRequest.get(`/transactions/reverse-check/${id}`);
    if (res.data.success === 1) {
      dispatch(getSearchedReversalSuccess(res.data.data));
    } else {
      dispatch(getSearchedReversalFailure());
    }
  } catch (error) {}
};

export const getRevesalTrans = async (dispatch, id) => {
  dispatch(getReversalStart());
  try {
    const res = await userRequest.get(`/transactions/reverse/${id}`);
    dispatch(getReversalSuccess(res.data));
  } catch (error) {
    dispatch(getReversalFailure());
  }
};

// WALLET PAGE
export const getWalletList = async (dispatch) => {
  dispatch(getWalletStart());
  try {
    const res = await userRequest.get("/profile/samji");
    dispatch(getWalletSucess(res.data.data.wallet_list.data));
  } catch (error) {
    dispatch(getWalletFailure());
  }
};

// Servers
export const verifyServer1 = async (dispatch, ref) => {
  dispatch(serverStart());
  try {
    const res = await userRequest.post(`/verification/s5`, ref);
    if (res.data.success === 1) {
      dispatch(serverSuccess(res.data));
    } else {
      dispatch(serverFailure());
    }
  } catch (error) {
    dispatch(serverFailure());
  }
};

export const verifyServer6 = async (dispatch, ref) => {
  dispatch(serverStart());
  try {
    const res = await userRequest.post(`/verification/s6`, ref);
    if (res.data.success === 1) {
      dispatch(serverSuccess(res.data));
    } else {
      dispatch(serverFailure());
    }
  } catch (error) {
    dispatch(serverFailure());
  }
};

export const verifyServer10 = async (dispatch, ref) => {
  dispatch(serverStart());
  try {
    const res = await userRequest.post(`/verification/s10`, ref);
    if (res.data.success === 1) {
      dispatch(serverSuccess(res.data));
      console.log(res.data);
    } else {
      dispatch(serverFailure());
    }
  } catch (error) {
    dispatch(serverFailure());
  }
};

export const verifyServer11 = async (dispatch, ref) => {
  dispatch(serverStart());
  try {
    const res = await userRequest.post(`/verification/s11`, ref);
    if (res.data.success === 1) {
      dispatch(serverSuccess(res.data));
    } else {
      dispatch(serverFailure());
    }
  } catch (error) {
    dispatch(serverFailure());
  }
};

// Airtime Coverter page
export const getAirtimeList = async (dispatch, page) => {
  dispatch(getAirtimeCovStart());
  try {
    const res = await userRequest.get(`/airtime-converter/list?page=${page}`);
    dispatch(getAirtimeCovSucess(res.data.data));
  } catch (error) {
    dispatch(getAirtimeCovFailure());
  }
};

export const creditAirtime = async (dispatch, ref) => {
  dispatch(creditStart());
  try {
    const res = await userRequest.post(`/airtime-converter/make-payment`, ref);
    if (res.data.success === 1) {
      dispatch(creditSuccess(res.data));
    } else {
      dispatch(creditFailure());
    }
  } catch (error) {
    dispatch(creditFailure());
  }
};

// RESELLER CONTROLLER
export const getAirtimeConList = async (dispatch) => {
  dispatch(getAirtimeConStart());
  try {
    const res = await userRequest.get(`/appAirtimeConfigList`);
    dispatch(getAirtimeConSucess(res.data.data));
  } catch (error) {
    dispatch(getAirtimeConFailure());
  }
};

export const modifyAirtimeCon = async (dispatch, id, discount, server) => {
  dispatch(modifyAirtimeStart()); // set isProcessing flag to true
  try {
    const res = await userRequest.post(
      `/appDataConfigUpdate`,
      id,
      discount,
      server
    );
    dispatch(modifyAirtimeSucess(res.data));
  } catch (error) {
    dispatch(modifyAirtimeFailure()); // set error flag to true
  }
};
