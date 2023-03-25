import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import TransReducer from "./pendingTransSlice";
import settingsReducer from "./settingsSlice";
import walletReducer from "./walletSlice";
import profileReducer from "./profileSlice";
import serverReducer from "./serverSlice";
import airtimeReducer from "./airtimeConverterSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["transaction", "wallet", "settings", "profile", "server", "airtimeConverter"],
};

const rootReducer = combineReducers({
  user: userReducer,
  transaction: TransReducer,
  settings: settingsReducer,
  wallet: walletReducer,
  profile: profileReducer,
  server: serverReducer,
  airtimeConverter: airtimeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
