import { createSlice } from "@reduxjs/toolkit";

const pendingTransactionSlice = createSlice({
  name: "transaction",
  initialState: {
    isProcessing: false,
    error: false,
    checkId: [],
    message: null,
    transHistory: [],
  },
  reducers: {
    getTransHistoryStart: (state) => {
      state.isProcessing = true;
    },
    getTransHistorySucess: (state, action) => {
      state.isProcessing = false;
      state.transHistory = action.payload;
    },
    getTransHistoryFailure: (state) => {
      state.isProcessing = false;
      state.error = true;
    },
    reProcessAllStart: (state) => {
      state.isProcessing = true;
    },
    reProcessAllSucess: (state, action) => {
      state.isProcessing = false;
      state.checkId = action.payload;
      state.message = action.payload;
    },
    reProcessAllFailure: (state) => {
      state.isProcessing = false;
      state.error = true;
    },
  },
});

export const {
  reProcessAllStart,
  reProcessAllSucess,
  reProcessAllFailure,
  getTransHistoryStart,
  getTransHistorySucess,
  getTransHistoryFailure,
} = pendingTransactionSlice.actions;
export default pendingTransactionSlice.reducer;
