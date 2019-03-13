import React, {Component} from 'react';
import {connect} from 'react-redux';
import Board from '../components/Board';
import GameInfo from '../components/GameInfo';
import {fillCell, jumpBackTo} from '../actions/game';
import calculateWinner from '../utils/calculateWinner';

class Game extends Component {
  onSquareClick(i) {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    this.props.fillCell(squares);
  }

  renderStatus = (currentGame, xIsNext) => {
    const winner = calculateWinner(currentGame.squares);
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
