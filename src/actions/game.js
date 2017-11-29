
export const fillCell = (squares) => ({
  type: 'FILL_CELL',
  squares
});

export const jumpBackTo = (stepNumber) => ({
  type: 'JUMP_TO',
  stepNumber
})
