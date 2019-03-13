import {ActionTypes} from "../constants/actionTypes";
import {Squares} from "../reducers/gameReducer";

export const fillCell = (squares: Squares): { type: string, payload: Squares } => ({
  type: ActionTypes.FILL_CELL,
  payload: squares
});

export const jumpBackTo = (stepNumber: number): { type: string, payload: number } => ({
  type: ActionTypes.JUMP_TO,
  payload: stepNumber
});
