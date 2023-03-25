import { createSlice } from "@reduxjs/toolkit";

const airtimeConverterSlice = createSlice({
  name: "airtimeConverter",
  initialState: {
    isFetching: false,
    error: false,
    airtimeCovList: [],
    creditUser: null,
  },
  reducers: {
    getAirtimeCovStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAirtimeCovSucess: (state, action) => {
      state.isFetching = false;
      state.airtimeCovList = action.payload;
    },
    getAirtimeCovFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    creditStart: (state) => {
        state.isFetching = true;
      },
      creditSuccess: (state, action) => {
        state.isFetching = false;
        state.creditUser = action.payload;
        state.message= true;
        state.error = false;
      },
      creditFailure: (state) => {
        state.isFetching = false;
        state.error = true;
        state.message= false;
      },
  },
});

export const {
  getAirtimeCovStart,
  getAirtimeCovSucess,
  getAirtimeCovFailure,
  creditStart,
  creditSuccess,
  creditFailure
  
} = airtimeConverterSlice.actions;
export default airtimeConverterSlice.reducer;
