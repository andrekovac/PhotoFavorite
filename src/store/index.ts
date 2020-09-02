import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from './slices';
import rootSaga from './saga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware()],
  devTools: true,
});

// Run root saga
sagaMiddleware.run(rootSaga);

export default store;
