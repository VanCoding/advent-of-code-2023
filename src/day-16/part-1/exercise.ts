import { map, pipe, sumBy } from "remeda";

export type Tiles = Tile[][];
type Tile = "/" | "\\" | "|" | "-" | ".";
export type Beam = {
  x: number;
  y: number;
  direction: Direction;
};
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Position = { x: number; y: number };

export const parseTiles = (input: string): Tiles =>
  input
    .split("\n")
    .map((line) => line.split("").map((mirror) => mirror as Tile));

const getTileInDirection = (
  { x, y, direction }: Beam,
  tiles: Tiles
): Position | null => {
  if (direction === "DOWN" && y < tiles.length - 1) {
    return { y: y + 1, x: x };
  } else if (direction === "UP" && y > 0) {
    return { y: y - 1, x };
  } else if (direction === "LEFT" && x > 0) {
    return { y, x: x - 1 };
  } else if (direction === "RIGHT" && x < tiles[y].length - 1) {
    return { y, x: x + 1 };
  }
  return null;
};

const HORIZONTAL: Direction[] = ["UP", "DOWN"];
const VERTICAL: Direction[] = ["LEFT", "RIGHT"];

const PAIRS: Record<
  "/" | "\\",
  [[Direction, Direction], [Direction, Direction]]
> = {
  "/": [
    ["UP", "RIGHT"],
    ["DOWN", "LEFT"],
  ],
  "\\": [
    ["UP", "LEFT"],
    ["DOWN", "RIGHT"],
  ],
};

const mirrorBeam = (direction: Direction, tile: Tile): Direction[] => {
  if (tile === ".") {
    return [direction];
  } else if (tile === "-") {
    if (HORIZONTAL.includes(direction)) {
      return VERTICAL;
    } else {
      return [direction];
    }
  } else if (tile === "|") {
    if (VERTICAL.includes(direction)) {
      return HORIZONTAL;
    } else {
      return [direction];
    }
  } else {
    return PAIRS[tile]
      .find((pair) => pair.includes(direction))!
      .filter((d) => d !== direction);
  }
};

export const processBeams = (beams: Beam[], tiles: Tiles): Direction[][][] => {
  const energizedTiles = tiles.map((line) => line.map(() => [] as Direction[]));

  while (beams.length > 0) {
    const { x, y, direction } = beams.shift()!;
    if (energizedTiles[y][x].includes(direction)) continue;
    energizedTiles[y][x].push(direction);
    for (const newDirection of mirrorBeam(direction, tiles[y][x])) {
      const newPosition = getTileInDirection(
        { x, y, direction: newDirection },
        tiles
      );
      if (!newPosition) continue;
      beams.push({ ...newPosition, direction: newDirection });
    }
  }
  return energizedTiles;
};

export const getEnergizedTileCount = (beam: Beam, tiles: Tiles): number =>
  pipe(
    processBeams([beam], tiles),
    map((line) => line.filter((tile) => tile.length > 0)),
    sumBy((v) => v.length)
  );
export const solve = (input: string) =>
  getEnergizedTileCount({ x: 0, y: 0, direction: "RIGHT" }, parseTiles(input));
