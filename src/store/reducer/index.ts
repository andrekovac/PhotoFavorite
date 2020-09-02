import { combineReducers } from "redux";

import counterReducer from "./counter";
import photosReducer from "./photos";

export const rootReducer = combineReducers({
  count: counterReducer,
  photos: photosReducer
  // add other reducers here
});

export type StoreT = NonNullable<Parameters<typeof rootReducer>[0]>;
