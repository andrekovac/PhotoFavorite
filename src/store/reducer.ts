import { combineReducers } from "redux";

import { IncrementActionT } from "./actionCreators";
import { INCREMENT } from "./actionTypes";

const defaultState: number = 0;

const counterReducer = (state = defaultState, action: IncrementActionT) => {
  switch (action.type) {
    case INCREMENT:
      state = state + 1;
      break;
  }
  return state;
};

export const rootReducer = combineReducers({
  count: counterReducer,
  // add other reducers here
});

export type StoreT = NonNullable<Parameters<typeof rootReducer>[0]>;
