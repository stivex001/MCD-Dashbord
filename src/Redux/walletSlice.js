import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    isFetching: false,
    error: false,
    walletData: [],
    withdrawalData: [],
    message: null,
  },
  reducers: {
    getWalletDataStart: (state) => {
      state.isProcessing = true;
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
      state.isProcessing = true;
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
  },
});

export const {
  getWalletDataStart,
  getWalletDataSucess,
  getWalletDataFailure,
  getWithdrawalDataStart,
  getWithdrawalDataSucess,
  getWithdrawalDataFailure,
} = walletSlice.actions;
export default walletSlice.reducer;
