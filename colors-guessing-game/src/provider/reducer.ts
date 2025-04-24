import { SIZE } from "../constants/constants";
import { IAnswer, IColors } from "../types";
import { generateQuestion, getStats } from "../utils/common";


export interface IState {
  trueAnswer: IColors;
  win: boolean;
  history: Array<IAnswer>;
}

export interface IAction {
  type: string;
  payload?: any;
}

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'new-game':
      const trueAnswer = generateQuestion();
      console.log(trueAnswer);
      
      return { trueAnswer, history: [], win: false };
    case 'set-answer': {
      const stats = getStats(action.payload, state.trueAnswer);
      const isWin = stats.cc === SIZE;
      return {
        ...state,
        win: isWin,
        history: [
          ...state.history,
          { colors: action.payload, stats }
        ]
      }
    }
  }
  return state;
}