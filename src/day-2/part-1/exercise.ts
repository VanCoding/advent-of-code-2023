import { filter, map, maxBy, pipe, sumBy } from "remeda";

export type Game = {
  id: number;
  sets: DiceCounts[];
};

export type DiceCounts = {
  red: number;
  green: number;
  blue: number;
};

type Color = "red" | "green" | "blue";

type Part = {
  count: number;
  color: Color;
};

const findColorCount = (parts: Part[], color: Color) =>
  parts.find((p) => p.color === color)?.count ?? 0;

export const parseGames = (data: string): Game[] =>
  map(data.split("\n"), (line) => {
    const [header, sets] = line.split(": ");
    const [game, id] = header.split(" ");
    return {
      id: +id,
      sets: map(sets.split("; "), (set) => {
        const parts = map(set.split(", "), (entry) => {
          const [count, color] = entry.split(" ");
          return { count: +count, color } as Part;
        });
        return {
          red: findColorCount(parts, "red"),
          blue: findColorCount(parts, "blue"),
          green: findColorCount(parts, "green"),
        };
      }),
    };
  });

const getMaxDiceCount = (game: Game, getCount: (set: DiceCounts) => number) =>
  maxBy(game.sets.map(getCount), (v) => v) ?? 0;

const colorIsPossible = (
  game: Game,
  maxCounts: DiceCounts,
  diceCounts: DiceCounts,
  getCount: (set: DiceCounts) => number
) => getCount(maxCounts) <= getCount(diceCounts);
export const getMaxDiceCounts = (game: Game): DiceCounts => {
  return {
    blue: getMaxDiceCount(game, (v) => v.blue),
    red: getMaxDiceCount(game, (v) => v.red),
    green: getMaxDiceCount(game, (v) => v.green),
  };
};

export const gameIsPossible = (game: Game, diceCounts: DiceCounts) => {
  const maxCounts = getMaxDiceCounts(game);
  return (
    colorIsPossible(game, maxCounts, diceCounts, (v) => v.blue) &&
    colorIsPossible(game, maxCounts, diceCounts, (v) => v.red) &&
    colorIsPossible(game, maxCounts, diceCounts, (v) => v.green)
  );
};

export const solve = (input: string, diceCounts: DiceCounts): number =>
  pipe(
    parseGames(input),
    filter((game) => gameIsPossible(game, diceCounts)),
    sumBy((game) => game.id)
  );
