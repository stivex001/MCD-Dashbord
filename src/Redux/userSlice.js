import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    message: null,
    allUsers: [],
    userOverview: '',
    agents: [],
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginfailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    logoutSuccess: (state, action) => {
      state.message = action.payload;
      state.currentUser = null;
      state.error = false;
    },
    getAllUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAllUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.allUsers = action.payload;
    },
    getAllUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getUserOverviewStart: (state) => {
      state.isFetching = true;
    },
    getUserOverviewSuccess: (state, action) => {
      state.userOverview = action.payload;
      state.isFetching = true;
    },
    getUserOverviewFailure: (state) => {
      state.error = true;
    },
    getAgentsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAgentsSuccess: (state, action) => {
      state.isFetching = false;
      state.agents = action.payload;
    },
    getAgentsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginfailure,
  logoutSuccess,
  getAllUsersStart,
  getAllUsersSuccess,
  getAllUsersFailure,
  getUserOverviewStart,
  getUserOverviewSuccess,
  getUserOverviewFailure,
  getAgentsStart,
  getAgentsSuccess,
  getAgentsFailure,
} = userSlice.actions;
export default userSlice.reducer;
