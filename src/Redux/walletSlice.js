import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    isFetching: false,
    error: false,
    walletData: [],
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
  },
});

export const { getWalletDataStart, getWalletDataSucess, getWalletDataFailure } =
  walletSlice.actions;
export default walletSlice.reducer;
