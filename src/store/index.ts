import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { rootReducer, StoreT } from "./reducer";
import { ActionT } from "./actionCreators";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<StoreT, ActionT>)
  )
);

export default store;
