import { combineReducers } from "@reduxjs/toolkit";

import CounterReducer from "./counter";

const rootReducer = combineReducers({
  count: CounterReducer,
});

export type RootStateT = ReturnType<typeof rootReducer>;

export default rootReducer;
