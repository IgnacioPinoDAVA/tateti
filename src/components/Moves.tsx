import { Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { players } from "../utils/players";
import { move } from "./Atoms";

export default function Moves() {
  const { player1, player2 } = players;
  const currentColor = useRecoilValue(move);

  return (
    <Typography
      variant="h3"
      align="center"
      sx={{ marginBottom: "60px", fontWeight: "bold" }}
    >
      {currentColor ? player1.color : player2.color}'s turn
    </Typography>
  );
}
