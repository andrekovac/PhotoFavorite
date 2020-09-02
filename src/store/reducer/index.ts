import { combineReducers } from "redux";

import counterReducer from "./counter";

export const rootReducer = combineReducers({
  count: counterReducer,
  // add other reducers here
});

export type StoreT = NonNullable<Parameters<typeof rootReducer>[0]>;
