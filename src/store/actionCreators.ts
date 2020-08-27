import { Action } from "redux";

import { INCREMENT, DECREMENT } from "./actionTypes";

export type CounterActionT = {
  type: typeof INCREMENT | typeof DECREMENT,
}

export const increment = (): Action<typeof INCREMENT> => {
  return {
    type: INCREMENT,
  };
};

export const decrement = (): Action<typeof DECREMENT> => {
  return {
    type: DECREMENT,
  };
};
