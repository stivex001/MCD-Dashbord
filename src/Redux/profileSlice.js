import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    isFetching: false,
    error: false,
    walletList: [],
    message: null,
    searchUsers: [],
    fecthedUsers: false,
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
    getSearchedUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSearchedUserSuccess: (state, action) => {
      state.isFetching = false;
      state.searchUsers = action.payload;
      state.fecthedUsers = true
    },
    getSearchedUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getWalletStart,
  getWalletSucess,
  getWalletFailure,
  getSearchedUserStart,
  getSearchedUserSuccess,
  getSearchedUserFailure,
} = profileSlice.actions;
export default profileSlice.reducer;
