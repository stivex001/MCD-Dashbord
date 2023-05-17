import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authProfile",
  initialState: {
    samji: [],
    samTrans: [],
    samWallet: [],
    isFetching: false,
    error: false,
    message: false,
  },
  reducers: {
    getSamWalletStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSamWalletSuccess: (state, action) => {
      state.isFetching = false;
      state.samWallet = action.payload;
    },
    getSamWalletFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getSamjiStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSamjiSuccess: (state, action) => {
      state.isFetching = false;
      state.samji = action.payload;
    },
    getSamjiFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getSamTransStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSamTransSuccess: (state, action) => {
      state.isFetching = false;
      state.samTrans = action.payload;
    },
    getSamTransFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getSamTransStart,
  getSamTransSuccess,
  getSamTransFailure,
  getSamjiStart,
  getSamjiSuccess,
  getSamjiFailure,
  getSamWalletStart,
  getSamWalletSuccess,
  getSamWalletFailure,
} = authSlice.actions;
export default authSlice.reducer;
