import React, { useState } from "react";
import Board from "./board";
import "./styles.css";

export type SquaresType = Array<string | null>;

function calculateWinner(squares: SquaresType) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState<SquaresType>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (squareIndexClicked: number) => {
    const tempSquares = squares.slice();
    if (calculateWinner(squares) || squares[squareIndexClicked]) {
      return;
    }
    tempSquares[squareIndexClicked] = xIsNext ? "X" : "O";
    setSquares(tempSquares);
    setXIsNext(!xIsNext);
  };

  const resetBoard = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <p>
        <em>
          taken from React tutorial. I converted it to TS and tweaked it a
          little...
        </em>
      </p>
      <div className="game">
        <div className="game-board">
          <Board
            squares={squares}
            onSquareClick={(squareIndexClicked: number) =>
              handleClick(squareIndexClicked)
            }
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={resetBoard}>Reset Board</button>
        </div>
      </div>
    </>
  );
};
export default TicTacToe;
