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
  getSamjiFailure,
  getSamjiStart,
  getSamjiSuccess,
  getSamTransFailure,
  getSamTransStart,
  getSamTransSuccess,
  getSamWalletFailure,
  getSamWalletStart,
  getSamWalletSuccess,
  getUserOverviewFailure,
  getUserOverviewStart,
  getUserOverviewSuccess,
  getUserPerfFailure,
  getUserPerfStart,
  getUserPerfSuccess,
  getUserTransFailure,
  getUserTransStart,
  getUserTransSuccess,
  getUserWalletFailure,
  getUserWalletStart,
  getUserWalletSuccess,
  loginfailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSucess,
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
  reProcessOneFailure,
  reProcessOneStart,
  reProcessOneSucess,
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
import {
  getAirtelFailure,
  getAirtelStart,
  getAirtelSucess,
  getDatapinsFailure,
  getDatapinsStart,
  getDatapinsSucess,
  getElectricityFailure,
  getElectricityStart,
  getElectricitySucess,
  getGloFailure,
  getGloStart,
  getGloSucess,
  getMobileFailure,
  getMobileStart,
  getMobileSucess,
  getMtnFailure,
  getMtnStart,
  getMtnSucess,
  getTvFailure,
  getTvStart,
  getTvSucess,
  updateAirtelFailure,
  updateAirtelStart,
  updateAirtelSucess,
  updateDatapinsFailure,
  updateDatapinsStart,
  updateDatapinsSucess,
  updateElectricityFailure,
  updateElectricityStart,
  updateElectricitySucess,
  updateGloFailure,
  updateGloStart,
  updateGloSucess,
  updateMobileFailure,
  updateMobileStart,
  updateMobileSucess,
  updateMtnFailure,
  updateMtnStart,
  updateMtnSucess,
  updateTvFailure,
  updateTvStart,
  updateTvSucess,
} from "./dataListSlice";

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

export const logout = () => (dispatch) => {
  localStorage.removeItem("persist:root");
  userRequest.defaults.headers.common["Authorization"] = "";
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
    } else {
      dispatch(reProcessAllFailure());
    }
  } catch (error) {
    dispatch(reProcessAllFailure());
  }
};

export const reProcessOne = async (dispatch, id) => {
  dispatch(reProcessOneStart());
  try {
    const res = await userRequest.post("/transactions/resubmit", {
      id,
    });
    if (res.data.success === 1) {
      dispatch(reProcessOneSucess(res.data));
    } else {
      dispatch(reProcessOneFailure());
    }
  } catch (error) {
    dispatch(reProcessOneFailure());
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
    const res = await userRequest.get(`/profile/${username}/overview`);
    dispatch(getUserPerfSuccess(res.data));
  } catch (error) {
    dispatch(getUserPerfFailure());
  }
};

export const getUserTrans = async (dispatch, username, page) => {
  dispatch(getUserTransStart());
  try {
    const res = await userRequest.get(
      `/profile/${username}/transactions?page=${page}`
    );
    dispatch(getUserTransSuccess(res.data.data));
  } catch (error) {
    dispatch(getUserTransFailure());
  }
};

export const getSamTrans = async (dispatch, page) => {
  dispatch(getSamTransStart());
  try {
    const res = await userRequest.get(
      `profile/samji/transactions?page=${page}`
    );
    dispatch(getSamTransSuccess(res.data.data));
  } catch (error) {
    dispatch(getSamTransFailure());
  }
};

export const getUserWallet = async (dispatch, username, page) => {
  dispatch(getUserWalletStart());
  try {
    const res = await userRequest.get(
      `/profile/${username}/walletLogs?page=${page}`
    );
    dispatch(getUserWalletSuccess(res.data.data));
  } catch (error) {
    dispatch(getUserWalletFailure());
  }
};

export const getSamWallet = async (dispatch,page) => {
  dispatch(getSamWalletStart());
  try {
    const res = await userRequest.get(
      `profile/samji/walletLogs?page=${page}`
    );
    dispatch(getSamWalletSuccess(res.data.data));
  } catch (error) {
    dispatch(getSamWalletFailure());
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

export const getSamjiProfile = async (dispatch) => {
  dispatch(getSamjiStart());
  try {
    const res = await userRequest.get(
      `/user-search?user_name=sam&phoneno=08166939205&status&wallet&email&regdate`
    );
    dispatch(getSamjiSuccess(res.data.data));
  } catch (error) {
    dispatch(getSamjiFailure());
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

export const updateUser = async (
  dispatch,
  id,
  full_name,
  company_name,
  bvn,
  email,
  phoneno,
  address,
  target
) => {
  dispatch(updateUserStart());
  try {
    const res = await userRequest.post(
      `/update-user`,
      id,
      full_name,
      company_name,
      bvn,
      email,
      phoneno,
      address,
      target
    );

    dispatch(updateUserSucess(res.data));
  } catch (error) {
    dispatch(updateUserFailure()); // set error flag to true
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

export const getPendingTransData = async (dispatch, page) => {
  dispatch(getPendingTransStart());
  try {
    const res = await userRequest.get(`/transactions/pending?page=${page}`);
    dispatch(getPendingTransSucess(res.data.data));
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

// DATA LIST

export const getAirtelList = async (dispatch, type, server) => {
  dispatch(getAirtelStart());
  try {
    const res = await userRequest.get(
      `/appDataConfigList/AIRTEL/${type}/${server}`
    );
    dispatch(getAirtelSucess(res.data));
  } catch (error) {
    dispatch(getAirtelFailure());
  }
};

export const getMtnList = async (dispatch, type, server) => {
  dispatch(getMtnStart());
  try {
    const res = await userRequest.get(
      `/appDataConfigList/MTN/${type}/${server}`
    );
    dispatch(getMtnSucess(res.data));
  } catch (error) {
    dispatch(getMtnFailure());
  }
};

export const getGloList = async (dispatch, type, server) => {
  dispatch(getGloStart());
  try {
    const res = await userRequest.get(
      `/appDataConfigList/GLO/${type}/${server}`
    );
    dispatch(getGloSucess(res.data));
  } catch (error) {
    dispatch(getGloFailure());
  }
};

export const getMobileList = async (dispatch, type, server) => {
  dispatch(getMobileStart());
  try {
    const res = await userRequest.get(
      `/appDataConfigList/9MOBILE/${type}/${server}`
    );
    dispatch(getMobileSucess(res.data));
  } catch (error) {
    dispatch(getMobileFailure());
  }
};

export const getTvList = async (dispatch, page) => {
  dispatch(getTvStart());
  try {
    const res = await userRequest.get(`/appTvConfigList?page=${page}`);
    dispatch(getTvSucess(res.data.data));
  } catch (error) {
    dispatch(getTvFailure());
  }
};

export const getElectricityList = async (dispatch) => {
  dispatch(getElectricityStart());
  try {
    const res = await userRequest.get(`/appElectricityConfigList`);

    dispatch(getElectricitySucess(res.data.data));
  } catch (error) {
    dispatch(getElectricityFailure());
  }
};

export const getDatapinsList = async (dispatch) => {
  dispatch(getDatapinsStart());
  try {
    const res = await userRequest.get(`/appDataPinConfigList`);

    dispatch(getDatapinsSucess(res.data.data));
  } catch (error) {
    dispatch(getDatapinsFailure());
  }
};

export const modifyAirtelData = async (
  dispatch,
  id,
  name,
  provider_price,
  amount,
  status,
  note,
  server,
  discount
) => {
  dispatch(updateAirtelStart()); // set isProcessing flag to true
  try {
    const res = await userRequest.post(
      `/appDataConfigUpdate`,
      id,
      name,
      provider_price,
      amount,
      status,
      note,
      server,
      discount
    );
    console.log(res.data);
    if (res.data.success === 1) {
      dispatch(updateAirtelSucess(res.data));
    } else {
      dispatch(updateAirtelFailure());
    }
  } catch (error) {
    dispatch(updateAirtelFailure()); // set error flag to true
  }
};

export const modifyMtnData = async (
  dispatch,
  id,
  name,
  provider_price,
  amount,
  status,
  note,
  server,
  discount
) => {
  dispatch(updateMtnStart()); // set isProcessing flag to true
  try {
    const res = await userRequest.post(
      `/appDataConfigUpdate`,
      id,
      name,
      provider_price,
      amount,
      status,
      note,
      server,
      discount
    );

    if (res.data.success === 1) {
      dispatch(updateMtnSucess(res.data));
    } else {
      dispatch(updateMtnFailure());
    }
  } catch (error) {
    dispatch(updateMtnFailure()); // set error flag to true
  }
};

export const modifyGloData = async (
  dispatch,
  id,
  name,
  provider_price,
  amount,
  status,
  note,
  server,
  discount
) => {
  dispatch(updateGloStart()); // set isProcessing flag to true
  try {
    const res = await userRequest.post(
      `/appDataConfigUpdate`,
      id,
      name,
      provider_price,
      amount,
      status,
      note,
      server,
      discount
    );

    if (res.data.success === 1) {
      dispatch(updateGloSucess(res.data));
    } else {
      dispatch(updateGloFailure());
    }
  } catch (error) {
    dispatch(updateGloFailure()); // set error flag to true
  }
};

export const modifyMobileData = async (
  dispatch,
  id,
  name,
  provider_price,
  amount,
  status,
  note,
  server,
  discount
) => {
  dispatch(updateMobileStart()); // set isProcessing flag to true
  try {
    const res = await userRequest.post(
      `/appDataConfigUpdate`,
      id,
      name,
      provider_price,
      amount,
      status,
      note,
      server,
      discount
    );

    if (res.data.success === 1) {
      dispatch(updateMobileSucess(res.data));
    } else {
      dispatch(updateMobileFailure());
    }
  } catch (error) {
    dispatch(updateMobileFailure()); // set error flag to true
  }
};

export const modifyTvData = async (dispatch, id, name, price, discount) => {
  dispatch(updateTvStart()); // set isProcessing flag to true
  try {
    const res = await userRequest.post(
      `/appTvConfigUpdate`,
      id,
      name,
      price,
      discount
    );

    if (res.data.success === 1) {
      dispatch(updateTvSucess(res.data));
    } else {
      dispatch(updateTvFailure());
    }
  } catch (error) {
    dispatch(updateTvFailure()); // set error flag to true
  }
};

export const modifyElectrictyData = async (dispatch, id, discount) => {
  dispatch(updateElectricityStart());
  try {
    const res = await userRequest.post(
      `/appElectricityConfigUpdate`,
      id,
      discount
    );

    if (res.data.success === 1) {
      dispatch(updateElectricitySucess(res.data));
    } else {
      dispatch(updateElectricityFailure());
    }
  } catch (error) {
    dispatch(updateElectricityFailure()); // set error flag to true
  }
};

export const modifyDatapins = async (dispatch, id, name, price) => {
  dispatch(updateDatapinsStart());
  try {
    const res = await userRequest.post(
      `/appDataPinConfigUpdate`,
      id,
      name,
      price
    );

    if (res.data.success === 1) {
      dispatch(updateDatapinsSucess(res.data));
    } else {
      dispatch(updateDatapinsFailure());
    }
  } catch (error) {
    dispatch(updateDatapinsFailure()); // set error flag to true
  }
};
