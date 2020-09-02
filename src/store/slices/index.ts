import { combineReducers } from "@reduxjs/toolkit";

import CounterReducer from "./counter";
import PhotosReducer from "./photos";

const rootReducer = combineReducers({
  count: CounterReducer,
  photos: PhotosReducer,
});

export type RootStateT = ReturnType<typeof rootReducer>;

export default rootReducer;
