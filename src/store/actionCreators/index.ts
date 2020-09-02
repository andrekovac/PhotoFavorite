import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { StoreT } from "../reducer";
import { CounterActionT } from "./counter";
import { PhotosActionT } from "./photos";

export type GeneralActionT = Action<string>;
/* Use this more specific type instead of GeneralActionT for more type security if desired */
export type ActionT = CounterActionT | PhotosActionT;

/**
 * To reduce repetition it is recommended to define a general Thunk type.
 * See https://redux.js.org/recipes/usage-with-typescript#usage-with-redux-thunk
 */
export type ThunkResult<ReturnType = void> = ThunkAction<
  ReturnType,
  StoreT,
  unknown,
  GeneralActionT
>;
