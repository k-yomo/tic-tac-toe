import {FILL_CELL, JUMP_TO} from "../actionTypes";

const DEFAULT_STATE = {
  history: [{
    squares: Array(9).fill(null),
  }],
  stepNumber: 0,
  xIsNext: true
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FILL_CELL:
      return {
        history: [...state.history, {squares: action.squares}],
        stepNumber: state.stepNumber + 1,
        xIsNext: !state.xIsNext
      };
    case JUMP_TO:
      return {
        history: state.history.slice(0, action.stepNumber + 1),
        stepNumber: action.stepNumber,
        xIsNext: (action.stepNumber % 2) === 0
      };
    default:
      return state;
  }
};
