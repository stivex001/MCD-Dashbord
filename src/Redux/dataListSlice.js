import { createSlice } from "@reduxjs/toolkit";

const dataListSlice = createSlice({
  name: "datalist",
  initialState: {
    isFetching: false,
    error: false,
    airtelList: [],
    message: null,
  },
  reducers: {
    getAirtelStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAirtelSucess: (state, action) => {
      state.isFetching = false;
      state.settings = action.payload;
    },
    getAirtelFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getAirtelStart, getAirtelSucess, getAirtelFailure } =
  dataListSlice.actions;
export default dataListSlice.reducer;
