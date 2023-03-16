import { createSlice } from "@reduxjs/toolkit";

const pendingTransactionSlice = createSlice({
  name: "transaction",
  initialState: {
    isProcessing: false,
    error: false,
    checkId: [],
    message: null,
    transHistory: [],
    pendingTrans: []
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
    getPendingTransStart: (state) => {
      state.isProcessing = true;
    },
    getPendingTransSucess: (state, action) => {
      state.isProcessing = false;
      state.pendingTrans = action.payload;
    },
    getPendingTransFailure: (state) => {
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
    toggleCheckbox: (state, action) => {
      const id = action.payload
      const isChecked = state.checkId.includes(id)

      if (isChecked) {
        state.checkId = state.checkId.filter((checkedId) => checkedId !== id)
      }
      else {
        state.checkId.push(id)
      }
      state.error = false
    },
    emptyCheckbox: (state) => {
      state.error = true;
    },
    closeErr: (state) => {
      state.error = false
    }
  },
});

export const {
  reProcessAllStart,
  reProcessAllSucess,
  reProcessAllFailure,
  getTransHistoryStart,
  getTransHistorySucess,
  getTransHistoryFailure,
  getPendingTransStart,
  getPendingTransSucess,
  getPendingTransFailure,
  toggleCheckbox,
  emptyCheckbox,
  closeErr
} = pendingTransactionSlice.actions;
export default pendingTransactionSlice.reducer;
