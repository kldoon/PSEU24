export interface IState {
  counter: number;
  counter2: number;
  counter3: number;
}

export interface IAction {
  type: string;
  payload?: number;
}