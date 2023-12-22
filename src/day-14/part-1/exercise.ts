import { pipe, sumBy } from "remeda";

type Tile = "O" | "#" | ".";

export type Platform = Tile[][];

export const parse = (input: string) =>
  input.split("\n").map((line) => line.split("") as Tile[]);

type Direction = "UP" | "RIGHT" | "DOWN" | "LEFT";
type Position = { x: number; y: number };

const next: Record<
  Direction,
  (platform: Platform, position: Position) => Position | null
> = {
  DOWN: (platform, { x, y }) =>
    y < platform.length - 1 ? { x, y: y + 1 } : null,
  LEFT: (platform, { x, y }) => (x > 0 ? { x: x - 1, y } : null),
  UP: (platform, { x, y }) => (y > 0 ? { x, y: y - 1 } : null),
  RIGHT: (platform, { x, y }) =>
    x < platform[y].length - 1 ? { x: x + 1, y } : null,
};

const getStart = (platform: Platform, direction: Direction): Position => {
  if (direction === "UP" || direction === "LEFT") return { x: 0, y: 0 };
  return { x: platform[0].length - 1, y: platform.length - 1 };
};

const getDelta = (direction: Direction): { x: 1 | -1; y: 1 | -1 } => {
  if (direction === "UP" || direction === "LEFT") return { x: 1, y: 1 };
  return { x: -1, y: -1 };
};

const move = (platform: Platform, start: Position, direction: Direction) => {
  let previous = start;
  let position: Position | null = null;
  while ((position = next[direction](platform, previous))) {
    if (platform[position.y][position.x] !== ".") return;
    platform[position.y][position.x] = "O";
    platform[previous.y][previous.x] = ".";
    previous = position;
  }
};

export const tilt = (platform: Platform, direction: Direction) => {
  const start = getStart(platform, direction);
  const delta = getDelta(direction);
  for (let y = start.y; y < platform.length && y >= 0; y += delta.y) {
    for (let x = start.x; x < platform[y].length && x >= 0; x += delta.y) {
      if (platform[y][x] === "O") {
        move(platform, { x, y }, direction);
      }
    }
  }
  return platform;
};

export const getLoad = (platform: Platform) =>
  sumBy(
    platform.map(
      (line, y) => (platform.length - y) * line.filter((c) => c === "O").length
    ),
    (v) => v
  );
export const solve = (input: string) =>
  pipe(input, parse, (platform) => tilt(platform, "UP"), getLoad);
