import { createSlice } from "@reduxjs/toolkit";

const pendingTransactionSlice = createSlice({
  name: "transaction",
  initialState: {
    isProcessing: false,
    error: false,
    checkId: [],
    Id: null,
    message: false,
    transHistory: [],
    pendingTrans: [],
    generalMarket: [],
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
    getGmStart: (state) => {
      state.isProcessing = true;
    },
    getGmSucess: (state, action) => {
      state.isProcessing = false;
      state.generalMarket = action.payload;
    },
    getGmFailure: (state) => {
      state.isProcessing = false;
      state.error = true;
    },
    reProcessAllStart: (state) => {
      state.isProcessing = true;
    },
    reProcessAllSucess: (state, action) => {
      state.isProcessing = false;
      state.checkId = action.payload;
      state.message = true;
      state.error = false;
    },
    reProcessAllFailure: (state) => {
      state.isProcessing = false;
      state.error = true;
    },
    reversalAllStart: (state) => {
      state.isProcessing = true;
    },
    reversalAllSucess: (state, action) => {
      state.isProcessing = false;
      state.checkId = action.payload;
      state.message = true;
      state.error = false;
    },
    reversalAllFailure: (state) => {
      state.isProcessing = false;
      state.error = true;
    },
    
    reProcessOneStart: (state) => {
      state.isProcessing = true;
    },
    reProcessOneSucess: (state, action) => {
      state.isProcessing = false;
      state.Id = action.payload;
      state.message = true;
      state.error = false;
    },
    reProcessOneFailure: (state) => {
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
        state.error = false
      }
    },
    emptyCheckbox: (state) => {
      state.error = true;
    },
    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = false;
    },
  },
});

export const {
  reProcessAllStart,
  reProcessAllSucess,
  reProcessAllFailure,
  reversalAllStart,
  reversalAllSucess,
  reversalAllFailure,
  getTransHistoryStart,
  getTransHistorySucess,
  getTransHistoryFailure,
  getPendingTransStart,
  getPendingTransSucess,
  getPendingTransFailure,
  toggleCheckbox,
  emptyCheckbox,
  getGmStart,
  getGmSucess,
  getGmFailure,
  reProcessOneStart,
  reProcessOneSucess,
  reProcessOneFailure,
  clearError,
  clearMessage
} = pendingTransactionSlice.actions;
export default pendingTransactionSlice.reducer;
