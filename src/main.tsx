import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./Board";
import "./index.css";
import { Box } from "@mui/material";
import Moves from "./components/Moves";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <Box
        height="100vh"
        sx={{ background: "linear-gradient(to right, #d3cce3, #e9e4f0)" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Moves />
        <App />
      </Box>
    </RecoilRoot>
  </React.StrictMode>
);
