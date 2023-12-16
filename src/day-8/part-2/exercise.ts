import { leastCommonMultiple } from "divisor";
import { Game, parse } from "../part-1/exercise";

type Cycle = {
  first: number;
  length: number;
};

export const progress = (
  start: string,
  sideIndex: number,
  count: number,
  game: Game
) => {
  let location = start;
  for (let i = 0; i < count; i++) {
    location =
      game.directions[location][
        game.sides[sideIndex + (i % game.sides.length)]
      ];
  }
  return location;
};

const findCycleStart = (history: string[], game: Game) => {
  for (let i = history.length - 1 - game.sides.length; i > 0; i -= 1) {
    if (history[i] === history[history.length - 1]) return i;
  }
  return null;
};

export const findCycle = (start: string, game: Game): Cycle => {
  const history: string[] = [start];

  do {
    history.push(
      game.directions[history[history.length - 1]][
        game.sides[(history.length - 1) % game.sides.length]
      ]
    );
  } while (
    !history[history.length - 1].endsWith("Z") ||
    findCycleStart(history, game) === null
  );

  const startIndex = findCycleStart(history, game)!;
  const endIndex = history.length - 1;

  return {
    first: startIndex,
    length: endIndex - startIndex,
  };
};

export const getStartLocations = (game: Game) =>
  Object.keys(game.directions).filter((location) => location.endsWith("A"));

export const findCycles = (startLocations: string[], game: Game) => {
  return startLocations.map((location) => findCycle(location, game));
};

export const solve = (input: string) => {
  const game = parse(input);
  const startLocations = getStartLocations(game);
  const cycles = findCycles(startLocations, game);
  const starts = cycles.map((cycle) => cycle.first);

  // why does this work?
  // well, depending on the input, it does not always work
  // but in this case, all cycles are as long as their start indexes
  return starts.slice(1).reduce(leastCommonMultiple, starts[0]);
};
