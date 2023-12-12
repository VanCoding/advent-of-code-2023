import {
  Query,
  solve as solvePart1,
  solveLines as solveLinesPart1,
} from "../part-1/exercise";

const QUERIES: Query[] = [
  { text: "0", value: 0 },
  { text: "1", value: 1 },
  { text: "2", value: 2 },
  { text: "3", value: 3 },
  { text: "4", value: 4 },
  { text: "5", value: 5 },
  { text: "6", value: 6 },
  { text: "7", value: 7 },
  { text: "8", value: 8 },
  { text: "9", value: 9 },
  { text: "zero", value: 0 },
  { text: "one", value: 1 },
  { text: "two", value: 2 },
  { text: "three", value: 3 },
  { text: "four", value: 4 },
  { text: "five", value: 5 },
  { text: "six", value: 6 },
  { text: "seven", value: 7 },
  { text: "eight", value: 8 },
  { text: "nine", value: 9 },
];

export const solveLines = (input: string) => solveLinesPart1(input, QUERIES);

export const solve = (input: string) => solvePart1(input, QUERIES);
