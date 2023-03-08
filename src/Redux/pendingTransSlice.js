import { createSlice } from "@reduxjs/toolkit";

const pendingTransactionSlice = createSlice({
  name: "pendingTransaction",
  initialState: {
    isProcessing: false,
    error: false,
    checkId: [],
    message: null
  },
  reducers: {
    reProcessAllStart: (state) => {
      state.isProcessing = true;
    },
    reProcessAllSucess: (state, action) => {
      state.isProcessing = false;
      state.checkId = action.payload;
      state.message = action.payload
    },
    reProcessAllFailure: (state) => {
      state.isProcessing = false;
      state.error = true;
    },
  },
});

export const { reProcessAllStart, reProcessAllSucess, reProcessAllFailure } =
  pendingTransactionSlice.actions;
export default pendingTransactionSlice.reducer;
