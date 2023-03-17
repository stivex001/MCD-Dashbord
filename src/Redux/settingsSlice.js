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
      state.isFetching = true;
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
      const { id, setting } = action.payload;
      const index = state.settings.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.settings[index] = setting;
      }
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
