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
    electricityList: [],
    modifyMtn: null,
    modifyGlo: null,
    modifyAirtel: null,
    modifyMobile: null,
    datapins: [],
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
    getElectricityStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getElectricitySucess: (state, action) => {
      state.isFetching = false;
      state.electricityList = action.payload;
    },
    getElectricityFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getDatapinsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getDatapinsSucess: (state, action) => {
      state.isFetching = false;
      state.datapins = action.payload;
    },
    getDatapinsFailure: (state) => {
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
      state.message = true;
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
      state.message = true;
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
      state.message = true;
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
      state.message = true;
    },
    updateMobileFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateTvStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateTvSucess: (state, action) => {
      state.isFetching = false;
      state.tvList = action.payload;
      state.message = true;
    },
    updateTvFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateElectricityStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateElectricitySucess: (state, action) => {
      state.isFetching = false;
      state.electricityList = action.payload;
    },
    updateElectricityFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateDatapinsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateDatapinsSucess: (state, action) => {
      state.isFetching = false;
      state.datapins = action.payload;
    },
    updateDatapinsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    modifyMtnStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    modifyMtnSucess: (state, action) => {
      state.isFetching = false;
      state.modifyMtn = action.payload;
      state.message = action.payload
    },
    modifyMtnFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    modifyGloStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    modifyGloSucess: (state, action) => {
      state.isFetching = false;
      state.modifyGlo = action.payload;
      state.message = action.payload
    },
    modifyGloFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    modifyAirtelStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    modifyAirtelSucess: (state, action) => {
      state.isFetching = false;
      state.modifyAirtel = action.payload;
      state.message = action.payload
    },
    modifyAirtelFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    modifyMobileStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    modifyMobileSucess: (state, action) => {
      state.isFetching = false;
      state.modifyMobile = action.payload;
      state.message = action.payload
    },
    modifyMobileFailure: (state) => {
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
  getTvFailure,
  updateTvStart,
  updateTvSucess,
  updateTvFailure,
  getElectricityStart,
  getElectricitySucess,
  getElectricityFailure,
  updateElectricityStart,
  updateElectricitySucess,
  updateElectricityFailure,
  getDatapinsStart,
  getDatapinsSucess,
  getDatapinsFailure,
  updateDatapinsStart,
  updateDatapinsSucess,
  updateDatapinsFailure,
  modifyAirtelStart,
  modifyAirtelSucess,
  modifyAirtelFailure,
  modifyGloStart,
  modifyGloSucess,
  modifyGloFailure,
  modifyMobileStart,
  modifyMobileSucess,
  modifyMobileFailure,
  modifyMtnStart,
  modifyMtnSucess,
  modifyMtnFailure,
} = dataListSlice.actions;
export default dataListSlice.reducer;
