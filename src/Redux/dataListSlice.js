import { createSlice } from "@reduxjs/toolkit";

const dataListSlice = createSlice({
  name: "datalist",
  initialState: {
    isFetching: false,
    error: false,
    airtelList: [],
    mtnList: [],
    gloList: [],
    mobileList: [],
    message: null,
  },
  reducers: {
    getAirtelStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAirtelSucess: (state, action) => {
      state.isFetching = false;
      state.airtelList = action.payload;
    },
    getAirtelFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getMtnStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getMtnSucess: (state, action) => {
      state.isFetching = false;
      state.mtnList = action.payload;
    },
    getMtnFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getGloStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getGloSucess: (state, action) => {
      state.isFetching = false;
      state.gloList = action.payload;
    },
    getGloFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getMobileStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getMobileSucess: (state, action) => {
      state.isFetching = false;
      state.mobileList = action.payload;
    },
    getMobileFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getAirtelStart,
  getAirtelSucess,
  getAirtelFailure,
  getMtnStart,
  getMtnSucess,
  getMtnFailure,
  getGloStart,
  getGloSucess,
  getGloFailure,
  getMobileStart,
  getMobileSucess,
  getMobileFailure,
} = dataListSlice.actions;
export default dataListSlice.reducer;
