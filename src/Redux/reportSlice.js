import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
  name: "report",
  initialState: {
    isFetching: false,
    error: false,
    message: false,
    pnl: [],
    pnlExpenses: [],
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
  },
});

export const {
  getPnlStart,
  getPnlSuccess,
  getPnlFailure,
  getPnlExpensesStart,
  getPnlExpensesSuccess,
  getPnlExpensesFailure,
} = reportSlice.actions;
export default reportSlice.reducer;
