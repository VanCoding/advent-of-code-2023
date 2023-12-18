import { filter, map, pipe, sumBy, uniq } from "remeda";

type Galaxy = {
  x: number;
  y: number;
};

export const parseGalaxies = (input: string): Galaxy[] =>
  input
    .split("\n")
    .flatMap((line, y) =>
      line
        .split("")
        .flatMap((character, x) => (character === "#" ? [{ x, y }] : []))
    );

export const expandSpace = (galaxies: Galaxy[], factor: number) =>
  galaxies.map((galaxy): Galaxy => {
    const left = pipe(
      galaxies,
      map(({ x }) => x),
      filter((x) => x < galaxy.x),
      uniq
    ).length;
    const above = pipe(
      galaxies,
      map(({ y }) => y),
      filter((y) => y < galaxy.y),
      uniq
    ).length;

    return {
      x: (galaxy.x - left) * factor + left,
      y: (galaxy.y - above) * factor + above,
    };
  });

export const getGalaxyDistance = (a: Galaxy, b: Galaxy): number =>
  Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

const getPossibilities = (galaxies: Galaxy[]) =>
  galaxies.flatMap((a, index) =>
    galaxies.slice(index + 1).map((b) => [a, b] as const)
  );

export const solveWithFactor = (input: string, factor: number) =>
  pipe(
    input,
    parseGalaxies,
    (galaxies) => expandSpace(galaxies, factor),
    getPossibilities,
    map((pair) => getGalaxyDistance(...pair)),
    sumBy((v) => v)
  );

export const solve = (input: string) => {
  return solveWithFactor(input, 2);
};
