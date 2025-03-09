import { IAction, IState } from "../@types";

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'increment':
      // Like you are doing a setState
      return { ...state, counter: state.counter + 1 };
    case 'decrement':
      return { ...state, counter: state.counter - 1, counter3: state.counter3 - 10 };
    case 'reset':
      return { counter: 0, counter2: 10, counter3: 90 };
    case 'set-value':
      return { ...state, counter2: action.payload ?? 0 };
    default: {
      console.error("invalid action type! :" + action.type)
      return state;
    }
  }
}

export default reducer;