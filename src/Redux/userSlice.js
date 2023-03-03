import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    message: null
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
    
  },
});

export const { loginStart, loginSuccess, loginfailure, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;
