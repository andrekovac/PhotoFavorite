import { createStore } from "redux";
import { rootReducer } from "./reducer";

const devtools = () =>
  __DEV__ &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devtools());

export default store;
