import { Action } from "redux";

import { INCREMENT, DECREMENT, RESET } from "./actionTypes";

export type CounterActionT = {
  type: typeof INCREMENT | typeof DECREMENT | typeof RESET,
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

export const reset = (): Action<typeof RESET> => {
  return {
      type: RESET,
  }
}
