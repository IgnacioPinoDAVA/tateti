import Square from "./components/Square";
import "./components/Square.tsx";
import { Container } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { history, count, combinations, win } from "./components/Atoms";
import { useEffect } from "react";

function App() {
  const stepCount = useRecoilValue(count);
  const board = useRecoilValue(history);
  const winConditions = useRecoilValue(combinations);
  const [matchEnd, setMatchEnd] = useRecoilState(win);

  useEffect(() => {
    if (stepCount < 5) {
      return;
    }

    const currentBoard = board[stepCount];

    winConditions.map((matches) => {
      const [a, b, c] = matches;

      if (
        currentBoard[a][1] &&
        currentBoard[a][1] === currentBoard[b][1] &&
        currentBoard[a][1] === currentBoard[c][1]
      ) {
        console.log(currentBoard[a][1].color);
        setMatchEnd({ ...matchEnd, victory: true });
      }
    });
  }, [board]);

  return (
    <Container sx={{ width: 500 }}>
      {board[stepCount].map((position: any) => Square(position))}
    </Container>
  );
}

export default App;
