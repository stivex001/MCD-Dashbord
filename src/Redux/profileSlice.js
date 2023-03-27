import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    isFetching: false,
    error: false,
    walletList: [],
    message: false,
    searchUsers: [],
    fecthedUsers: false,
    searchTrans: [],
    searchReversal: [],
    transReverse: null,
    gmBlock: [],
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
    getSearchedTransStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSearchedTransSuccess: (state, action) => {
      state.isFetching = false;
      state.searchTrans = action.payload;
      state.fecthedUsers = true
    },
    getSearchedTransFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getSearchedReversalStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSearchedReversalSuccess: (state, action) => {
      state.isFetching = false;
      state.searchReversal = action.payload;
      state.fecthedUsers = true
    },
    getSearchedReversalFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getReversalStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getReversalSuccess: (state, action) => {
      state.isFetching = false;
      state.transReverse = action.payload;
      state.message = true
    },
    getReversalFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getGmBlockStart: (state) => {
      state.isFetching = true;
    },
    getGmBlockSucess: (state, action) => {
      state.isFetching = false;
      state.gmBlock = action.payload;
    },
    getGmBlockFailure: (state) => {
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
  getSearchedTransStart,
  getSearchedTransSuccess,
  getSearchedTransFailure,
  getSearchedReversalStart,
  getSearchedReversalSuccess,
  getSearchedReversalFailure,
  getReversalStart,
  getReversalSuccess,
  getReversalFailure,
  getGmBlockStart,
  getGmBlockSucess,
  getGmBlockFailure
} = profileSlice.actions;
export default profileSlice.reducer;
