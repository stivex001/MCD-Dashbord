import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
  name: "report",
  initialState: {
    isFetching: false,
    error: false,
    message: false,
    pnl: [],
    pnlExpenses: [],
    pnlGl: [],
    pnlGlExpenses: [],
  },
  reducers: {
    getPnlStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getPnlSuccess: (state, action) => {
      state.isFetching = false;
      state.pnl = action.payload;
    },
    getPnlFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getPnlExpensesStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getPnlExpensesSuccess: (state, action) => {
      state.isFetching = false;
      state.pnlExpenses = action.payload;
    },
    getPnlExpensesFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getPnlGlStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getPnlGlSuccess: (state, action) => {
      state.isFetching = false;
      state.pnlGl = action.payload;
    },
    getPnlGlFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getPnlGlExpensesStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getPnlGlExpensesSuccess: (state, action) => {
      state.isFetching = false;
      state.pnlGlExpenses = action.payload;
    },
    getPnlGlExpensesFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getPnlStart,
  getPnlSuccess,
  getPnlFailure,
  getPnlExpensesStart,
  getPnlExpensesSuccess,
  getPnlExpensesFailure,
  getPnlGlStart,
  getPnlGlSuccess,
  getPnlGlFailure,
  getPnlGlExpensesStart,
  getPnlGlExpensesSuccess,
  getPnlGlExpensesFailure
} = reportSlice.actions;
export default reportSlice.reducer;
