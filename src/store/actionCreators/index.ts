import { Action } from "redux";

import { CounterActionT } from "./counter";

export type GeneralActionT = Action<string>;
/* Use this more specific type instead of GeneralActionT for more type security if desired */
export type ActionT = CounterActionT;
