import { map, pipe, sumBy } from "remeda";

export type Puzzle = {
  states: State[];
  damagedCounts: number[];
};

type State = "D" | "U" | "W";

export const parsePuzzles = (input: string): Puzzle[] =>
  input.split("\n").map((line) => {
    const [springs, groups] = line.split(" ");

    return {
      states: springs
        .split("")
        .map((c) => (c === "?" ? "U" : c === "#" ? "D" : "W")),
      damagedCounts: groups.split(",").map((damaged) => +damaged),
    };
  });

export const getValidPossibilities = (
  { states, damagedCounts }: Puzzle,
  stateIndex: number = 0,
  cache: Map<string, number> = new Map()
): number => {
  const key = `${stateIndex}/${damagedCounts.length}`;
  const cached = cache.get(key);
  if (cached) return cached;
  let possibilities = 0;
  const min = sumBy(damagedCounts, (v) => v) + damagedCounts.length - 1;

  for (let i = stateIndex; i < states.length - damagedCounts[0] + 1; i++) {
    if (states.length - i < min) continue;
    if (
      states.slice(i, i + damagedCounts[0]).every((s) => s !== "W") &&
      states[i + damagedCounts[0]] !== "D"
    ) {
      const remaining = states.slice(i + damagedCounts[0] + 1);
      if (damagedCounts.length === 1) {
        if (!remaining.includes("D")) {
          possibilities++;
        }
      } else if (remaining.length > 0) {
        possibilities += getValidPossibilities(
          {
            damagedCounts: damagedCounts.slice(1),
            states,
          },
          i + damagedCounts[0] + 1,
          cache
        );
      }
    }
    if (states[i] === "D") break;
  }
  cache.set(key, possibilities);

  return possibilities;
};

export const solvePuzzles = (puzzles: Puzzle[]) =>
  pipe(
    puzzles,
    map(getValidPossibilities),
    sumBy((v) => v)
  );

export const solve = (input: string) => pipe(input, parsePuzzles, solvePuzzles);
