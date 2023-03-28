import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    message: false,
    allUsers: [],
    userOverview: "",
    agents: [],
    resellers: [],
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
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      const { id, user } = action.payload;
      const index = state.allUsers.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.allUsers[index] = user;
      }
      state.message = true;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getUserOverviewStart: (state) => {
      state.isFetching = true;
    },
    getUserOverviewSuccess: (state, action) => {
      state.userOverview = action.payload;
      state.isFetching = false;
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
    getResellersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getResellersSuccess: (state, action) => {
      state.isFetching = false;
      state.resellers = action.payload;
    },
    getResellersFailure: (state) => {
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
  getUserStart,
  getUserSuccess,
  getUserFailure,
  getUserOverviewStart,
  getUserOverviewSuccess,
  getUserOverviewFailure,
  getAgentsStart,
  getAgentsSuccess,
  getAgentsFailure,
  getResellersStart,
  getResellersSuccess,
  getResellersFailure,
} = userSlice.actions;
export default userSlice.reducer;
