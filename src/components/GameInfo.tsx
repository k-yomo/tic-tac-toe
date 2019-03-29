import * as React from 'react';

interface GameInfoProps {
  status: string;
  moves: JSX.Element[];
}

export default ({ status, moves }: GameInfoProps) => (
  <div className="game-info">
    <div>{status}</div>
    <ol>{moves}</ol>
  </div>
);
