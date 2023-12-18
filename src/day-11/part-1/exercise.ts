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

export const expandSpace = (galaxies: Galaxy[]) =>
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
      x: (galaxy.x - left) * 2 + left,
      y: (galaxy.y - above) * 2 + above,
    };
  });

export const getGalaxyDistance = (a: Galaxy, b: Galaxy): number =>
  Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

const getPossibilities = (galaxies: Galaxy[]) =>
  galaxies.flatMap((a, index) =>
    galaxies.slice(index + 1).map((b) => [a, b] as const)
  );

export const solve = (input: string) => {
  const galaxies = expandSpace(parseGalaxies(input));
  return pipe(
    galaxies,
    getPossibilities,
    map((pair) => getGalaxyDistance(...pair)),
    sumBy((v) => v)
  );
};
