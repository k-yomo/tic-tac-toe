import * as React from 'react';
import Square from './Square';
import { Squares } from '../reducers/gameReducer';

interface BoardProps {
  squares: Squares;
  onSquareClick: (i: number) => void;
}

const boardRows = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

export default class Board extends React.Component<BoardProps> {
  private renderSquare = (i: number) => (
    <Square key={i} value={this.props.squares[i]} onClick={() => this.props.onSquareClick(i)} />
  );

  render() {
    return (
      <div className="game-board">
        {boardRows.map((squares, i) => (
          <div key={i} className="board-row">
            {squares.map(i => this.renderSquare(i))}
          </div>
        ))}
      </div>
    );
  }
}
