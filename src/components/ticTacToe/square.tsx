import React from "react";

interface SquareProps {
  onSquareClick: (squareIndexClicked: number) => void;
  value: string | null;
  index: number;
}

const Square: React.FC<SquareProps> = ({ onSquareClick, value, index }) => (
  <button className="square" onClick={() => onSquareClick(index)}>
    {value}
  </button>
);

export default Square;
