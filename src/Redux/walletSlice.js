import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    isFetching: false,
    error: false,
    walletData: [],
    withdrawalData: [],
    message: false,
    creditUser: null,
  },
  reducers: {
    getWalletDataStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getWalletDataSucess: (state, action) => {
      state.isFetching = false;
      state.walletData = action.payload;
    },
    getWalletDataFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getWithdrawalDataStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getWithdrawalDataSucess: (state, action) => {
      state.isFetching = false;
      state.withdrawalData = action.payload;
    },
    getWithdrawalDataFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    creditUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    creditUserSuccess: (state, action) => {
      state.isFetching = false;
      state.creditUser = action.payload;
      state.message = true;
    },
    creditUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getWalletDataStart,
  getWalletDataSucess,
  getWalletDataFailure,
  getWithdrawalDataStart,
  getWithdrawalDataSucess,
  getWithdrawalDataFailure,
  creditUserStart,
  creditUserSuccess,
  creditUserFailure
} = walletSlice.actions;
export default walletSlice.reducer;
