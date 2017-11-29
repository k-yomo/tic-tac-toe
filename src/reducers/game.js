
const gameReducerDefaultState = {
    history: [{
      squares: Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true
}

export default (state = gameReducerDefaultState, action) => {
  switch (action.type) {
    case 'FILL_CELL':
      return {
        history: [...state.history, { squares: action.squares}],
        stepNumber: state.stepNumber + 1,
        xIsNext: !state.xIsNext
      };
    case 'JUMP_TO':
      console.log(action.stepNumber);
      return {
        history: state.history.slice(0, action.stepNumber + 1),
        stepNumber: action.stepNumber,
        xIsNext: (action.stepNumber % 2) === 0
      }
    default:
      return state;
  }
};
