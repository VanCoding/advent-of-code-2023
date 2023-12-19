import { map, pipe } from "remeda";
import { Puzzle, parsePuzzles, solvePuzzles } from "../part-1/exercise";

export const solve = (input: string) =>
  pipe(
    input,
    parsePuzzles,
    map(
      (puzzle) =>
        ({
          damagedCounts: [
            ...puzzle.damagedCounts,
            ...puzzle.damagedCounts,
            ...puzzle.damagedCounts,
            ...puzzle.damagedCounts,
            ...puzzle.damagedCounts,
          ],
          states: [
            ...puzzle.states,
            "U",
            ...puzzle.states,
            "U",
            ...puzzle.states,
            "U",
            ...puzzle.states,
            "U",
            ...puzzle.states,
          ],
        } satisfies Puzzle)
    ),
    solvePuzzles
  );
