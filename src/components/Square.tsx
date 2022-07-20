import { Button } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { history, count, move, win } from "./Atoms";
import { players } from "../utils/players";

export default function Square([index, { symbol, color }]: any) {
  const [board, setBoard] = useRecoilState(history);
  const [moveCount, setMoveCount] = useRecoilState(count);
  const [nextMove, setNextMove] = useRecoilState(move);
  const matchEnd = useRecoilValue(win);
  const { player1, player2 } = players;

  const handleClick = (index: any) => {
    const isSquareEmpty = Object.keys(board[moveCount][index][1]).length;
    if (isSquareEmpty || matchEnd.victory) {
      return;
    }
    const moveAssign = [...board[moveCount]];
    moveAssign[index] = [index, nextMove ? player1 : player2];
    setNextMove(!nextMove);
    setMoveCount(moveCount + 1);
    setBoard(board.concat([[...moveAssign]]));
  };

  return (
    <Button
      sx={{
        width: 128,
        height: 128,
        fontSize: "32px",
        fontWeight: "bold",
        color: { color },
        border: `1px solid ${color}`,
        backgroundColor: "#ECEFF1",
        margin: 1,
        "&:hover": {
          background: "#CFD8DC",
        },
      }}
      key={index}
      onClick={() => {
        handleClick(index);
      }}
    >
      {symbol}
    </Button>
  );
}
