import { indexBy, mapValues, pick, pipe } from "remeda";

export type Game = {
  sides: Side[];
  directions: Record<string, Direction>;
};
type Side = "RIGHT" | "LEFT";
type Direction = Record<Side, string>;

export const parse = (input: string): Game => {
  const [sides, directions] = input.split("\n\n");
  return {
    sides: sides
      .split("")
      .map((s) => (s === "R" ? "RIGHT" : ("LEFT" satisfies Side))),
    directions: pipe(
      indexBy(
        directions.split("\n").map((d) => {
          const [from, content] = d.replace(")", "").split(" = (");
          const [LEFT, RIGHT] = content.split(", ");
          return { from, LEFT, RIGHT };
        }),
        (direction) => direction.from
      ),
      mapValues(pick(["LEFT", "RIGHT"]))
    ),
  };
};

export const getStepCount = (
  start: string,
  end: string,
  game: Game
): number => {
  let location = start;
  let jumps = 0;
  while (location != end) {
    location = game.directions[location][game.sides[jumps % game.sides.length]];
    jumps++;
  }
  return jumps;
};

export const solve = (input: string) =>
  getStepCount("AAA", "ZZZ", parse(input));
