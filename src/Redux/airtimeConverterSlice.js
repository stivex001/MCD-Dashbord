import { createSlice } from "@reduxjs/toolkit";

const airtimeConverterSlice = createSlice({
  name: "airtimeConverter",
  initialState: {
    isFetching: false,
    error: false,
    airtimeCovList: [],
    airtimeConList: [],
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
    getAirtimeConStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAirtimeConSucess: (state, action) => {
      state.isFetching = false;
      state.airtimeConList = action.payload;
    },
    getAirtimeConFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    modifyAirtimeStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    modifyAirtimeSucess: (state, action) => {
      state.isFetching = false;
      const { id, airtime } = action.payload;
      const index = state.airtimeConList.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.airtimeConList[index] = airtime;
      }
      state.message = true;
    },
    modifyAirtimeFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    creditStart: (state) => {
      state.isFetching = true;
    },
    creditSuccess: (state, action) => {
      state.isFetching = false;
      state.creditUser = action.payload;
      state.message = true;
      state.error = false;
    },
    creditFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.message = false;
    },
  },
});

export const {
  getAirtimeCovStart,
  getAirtimeCovSucess,
  getAirtimeCovFailure,
  getAirtimeConStart,
  getAirtimeConSucess,
  getAirtimeConFailure,
  getAirtimeResellerStart,
  getAirtimeResellerSucess,
  getAirtimeResellerFailure,
  creditStart,
  creditSuccess,
  creditFailure,
  modifyAirtimeStart,
  modifyAirtimeSucess,
  modifyAirtimeFailure
} = airtimeConverterSlice.actions;
export default airtimeConverterSlice.reducer;
