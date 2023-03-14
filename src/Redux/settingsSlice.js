import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    isFetching: false,
    error: false,
    settings: [],
    message: null
  },
  reducers: {
    getSettingsStart: (state) => {
      state.isProcessing = true;
      state.error = false;
    },
    getSettingsSucess: (state, action) => {
      state.isFetching = false;
      state.settings = action.payload;
      state.message = action.payload
    },
    getSettingsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getSettingsStart, getSettingsSucess, getSettingsFailure } =
  settingsSlice.actions;
export default settingsSlice.reducer;
