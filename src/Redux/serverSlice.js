import { createSlice } from "@reduxjs/toolkit";

const serverSlice = createSlice({
  name: "server",
  initialState: {
    isFetching: false,
    error: false,
    message: false,
    verifyRef: null
    
  },
  reducers: {
    server1Start: (state) => {
      state.isFetching = true;
    },
    server1Success: (state, action) => {
      state.isFetching = false;
      state.verifyRef = action.payload;
    },
    server1Failure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  server1Start,
  server1Success,
  server1Failure,
} = serverSlice.actions;
export default serverSlice.reducer;
