import { CounterActionT } from "../actionCreators/counter";
import { INCREMENT, DECREMENT, RESET } from "../actionTypes/counter";

const defaultState: number = 0;

const counterReducer = (state = defaultState, action: CounterActionT) => {
  switch (action.type) {
    case INCREMENT:
      state = state + 1;
      break;
    case DECREMENT:
      if (state > 0) {
        state = state - 1;
      }
      break;
    case RESET:
      state = defaultState;
      break;
  }
  return state;
};

export default counterReducer;
