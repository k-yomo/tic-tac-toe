import React, {Component} from 'react';
import {connect} from 'react-redux';
import Board from './Board';
import GameInfo from './GameInfo';
import {fillCell, jumpBackTo} from '../actions/game';

class Game extends Component {
  onSquareClick(i) {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    this.props.fillCell(squares);
  }

  calculateWinner(squares) {
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

  renderStatus = (currentGame, xIsNext) => {
    const winner = this.calculateWinner(currentGame.squares);
    if (winner) {
      return 'Winner: ' + winner;
    } else {
      return 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  };

  renderMoveHistory = (history) => {
    return history.map((step, move) => {
      const desc = move ? 'Move #' + move : 'Game start';
      return (
        <li key={move}>
          <a href='#' onClick={() => this.props.jumpBackTo(move)}>{desc}</a>
        </li>
      );
    });
  };

  render() {
    const {history, stepNumber, xIsNext} = this.props;
    const currentGame = history[stepNumber];
    return (
      <div className="game">
        <Board
          squares={currentGame.squares}
          onSquareClick={(i) => this.onSquareClick(i)}
        />
        <GameInfo
          status={this.renderStatus(currentGame, xIsNext)}
          moves={this.renderMoveHistory(history)}
        />
      </div>
    );
  }
}

const mapStateToProps = ({history, stepNumber, xIsNext}) => ({
  history,
  stepNumber,
  xIsNext
});

const mapDispatchToProps = (dispatch) => ({
  fillCell: (squares) => dispatch(fillCell(squares)),
  jumpBackTo: (step) => dispatch(jumpBackTo(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
