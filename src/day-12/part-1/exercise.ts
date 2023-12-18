import { equals, map, pipe, sumBy } from "remeda";

type Puzzle = {
  states: State[];
  damagedCounts: number[];
};

type State = "damaged" | "unknown" | "working";

export const parsePuzzles = (input: string): Puzzle[] =>
  input.split("\n").map((line) => {
    const [springs, groups] = line.split(" ");

    return {
      states: springs
        .split("")
        .map((c) =>
          c === "?" ? "unknown" : c === "#" ? "damaged" : "working"
        ),
      damagedCounts: groups.split(",").map((damaged) => +damaged),
    };
  });

type QuantifiedStates = Array<{ state: State; count: number }>;

const quantify = (states: State[]) => {
  const quantifiedStates: QuantifiedStates = [{ state: states[0], count: 1 }];
  for (let i = 1; i < states.length; i++) {
    if (states[i] === quantifiedStates[quantifiedStates.length - 1].state) {
      quantifiedStates[quantifiedStates.length - 1].count++;
    } else {
      quantifiedStates.push({ state: states[i], count: 1 });
    }
  }
  return quantifiedStates;
};

const findPossibilities = (puzzle: Puzzle): State[][] => {
  let possibilities: State[][] = [puzzle.states];
  for (let i = 0; i < puzzle.states.length; i++) {
    if (puzzle.states[i] === "unknown") {
      possibilities = possibilities.flatMap((states) => {
        const a = [...states];
        a[i] = "damaged";
        const b = [...states];
        b[i] = "working";
        return [a, b];
      });
    }
  }
  return possibilities;
};

const isPossibilityValid = (
  states: QuantifiedStates,
  damagedCounts: number[]
) => {
  const damaged = states
    .filter(({ state }) => state === "damaged")
    .map(({ count }) => count);

  return equals(damaged, damagedCounts);
};

export const getValidPossibilities = (puzzle: Puzzle) =>
  findPossibilities(puzzle)
    .map(quantify)
    .filter((states) => isPossibilityValid(states, puzzle.damagedCounts))
    .length;

export const solve = (input: string) =>
  pipe(
    input,
    parsePuzzles,
    map(getValidPossibilities),
    sumBy((v) => v)
  );
