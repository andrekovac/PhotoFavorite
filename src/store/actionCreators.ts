import { INCREMENT } from "./actionTypes";

export type IncrementActionT = {
  type: typeof INCREMENT;
};

export const increment = (): IncrementActionT => {
  return {
    type: INCREMENT,
  };
};
