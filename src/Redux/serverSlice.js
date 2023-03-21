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
    serverStart: (state) => {
      state.isFetching = true;
    },
    serverSuccess: (state, action) => {
      state.isFetching = false;
      state.verifyRef = action.payload;
      state.error = false;
      state.message= true;
    },
    serverFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  serverStart,
  serverSuccess,
  serverFailure,
} = serverSlice.actions;
export default serverSlice.reducer;
