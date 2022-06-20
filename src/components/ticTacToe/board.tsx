import React from "react";
import { SquaresType } from ".";
import Square from "./square";

interface SquareProps {
  onSquareClick: (squareIndexClicked: number) => void;
  squares: SquaresType;
}

const Board: React.FC<SquareProps> = ({ onSquareClick, squares }) => {
  const renderSquare = (squareIndexClicked: number) => (
    <Square
      value={squares[squareIndexClicked]}
      onSquareClick={() => onSquareClick(squareIndexClicked)}
      index={squareIndexClicked}
    />
  );

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
