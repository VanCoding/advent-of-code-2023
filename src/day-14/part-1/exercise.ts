import { pipe, sumBy } from "remeda";

type Tile = "O" | "#" | ".";

export type Platform = Tile[][];

export const parse = (input: string) =>
  input.split("\n").map((line) => line.split("") as Tile[]);

const moveUp = (platform: Platform, x: number, y: number) => {
  for (let i = y - 1; i >= 0; i--) {
    if (platform[i][x] !== ".") return;
    platform[i][x] = "O";
    platform[i + 1][x] = ".";
  }
};

export const tilt = (platform: Platform): Platform => {
  for (let y = 1; y < platform.length; y++) {
    for (let x = 0; x < platform[y].length; x++) {
      if (platform[y][x] === "O") {
        moveUp(platform, x, y);
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
export const solve = (input: string) => pipe(input, parse, tilt, getLoad);
