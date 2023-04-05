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
    tvList: [],
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
    getTvStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getTvSucess: (state, action) => {
      state.isFetching = false;
      state.tvList = action.payload;
    },
    getTvFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateAirtelStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateAirtelSucess: (state, action) => {
      state.isFetching = false;
      state.airtelList = action.payload;
      state.message = true
    },
    updateAirtelFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateMtnStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateMtnSucess: (state, action) => {
      state.isFetching = false;
      state.mtnList = action.payload;
      state.message = true
    },
    updateMtnFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateGloStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateGloSucess: (state, action) => {
      state.isFetching = false;
      state.gloList = action.payload;
      state.message = true
    },
    updateGloFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateMobileStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updatMobilelSucess: (state, action) => {
      state.isFetching = false;
      state.mobileList = action.payload;
      state.message = true
    },
    updateMobileFailure: (state) => {
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
  updateAirtelStart,
  updateAirtelSucess,
  updateAirtelFailure,
  updateMtnStart,
  updateMtnSucess,
  updateMtnFailure,
  updateGloStart,
  updateGloSucess,
  updateGloFailure,
  updateMobileStart,
  updateMobileSucess,
  updateMobileFailure,
  getTvStart,
  getTvSucess,
  getTvFailure
} = dataListSlice.actions;
export default dataListSlice.reducer;
