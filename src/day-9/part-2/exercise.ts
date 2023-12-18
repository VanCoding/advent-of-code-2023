import { map, pipe, reverse } from "remeda";
import { parseSequences, solveWithSequences } from "../part-1/exercise";

export const solve = (input: string) =>
  pipe(
    input,
    parseSequences,
    map((sequence) => reverse(sequence)),
    solveWithSequences
  );
