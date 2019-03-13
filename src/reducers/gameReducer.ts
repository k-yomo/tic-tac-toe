import { ActionTypes } from "../constants/actionTypes";

export type Squares = Array<string | null>

export interface GameState {
  history: Array<Squares>,
  stepNumber: number,
  xIsNext: boolean
}

const DEFAULT_STATE = {
  history: [Array(9).fill(null)],
  stepNumber: 0,
  xIsNext: true
};

export default (state: GameState = DEFAULT_STATE, action: any): GameState => {
  switch (action.type) {
    case ActionTypes.FILL_CELL:
      return {
        history: [...state.history, action.payload],
        stepNumber: state.stepNumber + 1,
        xIsNext: !state.xIsNext
      };
    case ActionTypes.JUMP_TO:
      return {
        history: state.history.slice(0, action.payload + 1),
        stepNumber: action.payload,
        xIsNext: (action.payload % 2) === 0
      };
    default:
      return state;
  }
};
