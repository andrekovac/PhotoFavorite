import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
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
import AsyncStorage from "@react-native-community/async-storage";

import rootReducer from "./slices";

const persistConfig = {
  key: "root",
  version: 1,
  // Storage method (React Native)
  storage: AsyncStorage,
  // Whitelist (Persist specific reducers)
  whitelist: ["photos", "count"],
  // Blacklist (Don't persist specific reducers)
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: true,
});

export const persistor = persistStore(store);

export default store;
