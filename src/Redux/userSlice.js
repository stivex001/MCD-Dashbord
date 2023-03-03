import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    message: false
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
      state.message = false;
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginSuccess, loginfailure, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;
