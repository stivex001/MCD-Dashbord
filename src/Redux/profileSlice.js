import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    isFetching: false,
    error: false,
    walletList: [],
    message: null,
  },
  reducers: {
    getWalletStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getWalletSucess: (state, action) => {
      state.isFetching = false;
      state.walletList = action.payload;
    },
    getWalletFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getWalletStart,
  getWalletSucess,
  getWalletFailure
} = profileSlice.actions;
export default profileSlice.reducer;
