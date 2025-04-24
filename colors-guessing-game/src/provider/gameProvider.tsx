import React, { useReducer } from "react";
import { IAction, IState, reducer } from "./reducer";
import { generateQuestion } from "../utils/common";

const INITIAL_STATE = { history: [], win: false, trueAnswer: generateQuestion() };
console.log(INITIAL_STATE.trueAnswer);

export const GameContext = React.createContext<{ data: IState, dispatch: React.ActionDispatch<[action: IAction]> }>(
  { data: INITIAL_STATE, dispatch: () => { } }
);

const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, dispatch] = useReducer(reducer, INITIAL_STATE)
  return <GameContext.Provider value={{ data, dispatch }}>{children}</GameContext.Provider>
}

export default GameProvider;