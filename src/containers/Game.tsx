import * as React from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import GameInfo from '../components/GameInfo';
import { fillCell, jumpBackTo } from '../actions/game';
import calculateWinner from '../utils/calculateWinner';
import { GameState, Squares } from '../reducers/gameReducer';
import { Action, Dispatch } from 'redux';

interface GameProps {
  history: Squares[];
  stepNumber: number;
  xIsNext: boolean;
  fillCell: (squares: Squares) => void;
  jumpBackTo: (step: number) => void;
}

class Game extends React.Component<GameProps> {
  onSquareClick(i: number): void {
    const history = this.props.history;
    const currentSquares = history[history.length - 1];
    const nextSquares = [...currentSquares];
    if (calculateWinner(currentSquares) || currentSquares[i]) {
      return;
    }
    nextSquares[i] = this.props.xIsNext ? 'X' : 'O';
    this.props.fillCell(nextSquares);
  }

  renderStatus = (currentSquares: Squares, xIsNext: boolean): string => {
    const winner = calculateWinner(currentSquares);
    if (winner) {
      return `Winner: ${winner}`;
    }
    return `Next player: ${xIsNext ? 'X' : 'O'}`;
  };

  renderMoveHistory = (history: Squares[]): JSX.Element[] => {
    return history.map((step, move) => {
      const desc = move ? `Move #${move}` : 'Game start';
      return (
        <li key={move}>
          <a href="#" onClick={() => this.props.jumpBackTo(move)}>
            {desc}
          </a>
        </li>
      );
    });
  };

  render() {
    const { history, stepNumber, xIsNext } = this.props;
    const currentSquares = history[stepNumber];
    return (
      <div className="game">
        <Board squares={currentSquares} onSquareClick={(i: number) => this.onSquareClick(i)} />
        <GameInfo
          status={this.renderStatus(currentSquares, xIsNext)}
          moves={this.renderMoveHistory(history)}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ history, stepNumber, xIsNext }: GameState) => ({
  history,
  stepNumber,
  xIsNext,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  fillCell: (squares: Squares) => dispatch(fillCell(squares)),
  jumpBackTo: (step: number) => dispatch(jumpBackTo(step)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
