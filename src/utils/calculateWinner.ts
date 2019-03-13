import {Squares} from "../reducers/gameReducer";

export default (squares: Squares): string | null => {
  const bingoLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < bingoLines.length; i++) {
    const [a, b, c] = bingoLines[i];
    const isBingo = squares[a] === squares[b] && squares[a] === squares[c];
    if (isBingo) { return squares[a]; }
  }
  return null;
}
