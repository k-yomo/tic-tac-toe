import * as React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

export default ({ value, onClick }: SquareProps) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);
