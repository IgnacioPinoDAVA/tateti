import { atom } from "recoil";

const squares = [
  [0, {}],
  [1, {}],
  [2, {}],
  [3, {}],
  [4, {}],
  [5, {}],
  [6, {}],
  [7, {}],
  [8, {}],
];

export const combinations = atom({
  key: "winningCombinations",
  default: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
});

export const count = atom({
  key: "currentCount",
  default: 0,
});

export const move = atom({
  key: "move",
  default: true,
});

export const win = atom({
  key: "matchEnded",
  default: {
    victory: false,
    winner: "",
    winningCombination: "",
  },
});

export const history = atom({
  key: "currentStep",
  default: [[...squares]],
});
