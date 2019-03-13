import React, {Component} from 'react';
import Square from './Square';

export default class Board extends Component {
  renderBoard() {
    const boardRows = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    return boardRows.map(sqares => (
      <div className="board-row">
        {sqares.map(i => this.renderSquare(i))}
      </div>
    ))
  }

  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onSquareClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="game-board">
        {this.renderBoard()}
      </div>
    );
  }
}
