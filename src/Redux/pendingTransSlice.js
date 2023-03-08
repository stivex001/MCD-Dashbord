import { createSlice } from "@reduxjs/toolkit";

const pendingTransactionSlice = createSlice({
  name: "pendingTransaction",
  initialState: {
    btnSelected: false,
    isProcessing: false,
    error: false,
    checkId: []
  },
  reducers: {
    reProcessStart: (state) => {
      state.btnSelected = true;
      state.isProcessing = true;
    },
    reProcessSucess: (state) => {
      state.isProcessing = false;
      state.btnSelected = false;
    },
    reProcessFailure: (state) => {
      state.isProcessing = false;
      state.btnSelected = false;
      state.error = true;
    },
  },
});

export const { reProcessStart, reProcessSucess, reProcessFailure } =
  pendingTransactionSlice.actions;
export default pendingTransactionSlice.reducer;
