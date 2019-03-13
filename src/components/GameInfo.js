import React from 'react';

export default ({status, moves}) => (
  <div className="game-info">
    <div>{status}</div>
    <ol>{moves}</ol>
  </div>
);
