import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    isFetching: false,
    error: false,
    settings: [],
    message: null,
  },
  reducers: {
    getSettingsStart: (state) => {
      state.isProcessing = true;
      state.error = false;
    },
    getSettingsSucess: (state, action) => {
      state.isFetching = false;
      state.settings = action.payload;
    },
    getSettingsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateSettingsStart: (state) => {
      state.isProcessing = true;
      state.error = false;
    },
    updateSettingsSucess: (state, action) => {
      state.isFetching = false;
      state.settings[state.settings.findIndex((item) => item.id === action.payload.id)] = action.payload.setting
    },
    updateSettingsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getSettingsStart,
  getSettingsSucess,
  getSettingsFailure,
  updateSettingsStart,
  updateSettingsSucess,
  updateSettingsFailure,
} = settingsSlice.actions;
export default settingsSlice.reducer;
