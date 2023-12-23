import { readFileSync } from "fs";

export const EXAMPLE_INPUT = readFileSync(
  "./src/day-16/part-1/example_input.txt"
)
  .toString()
  .trim();

export const EXAMPLE_ENERGIZED_MAP = `######....
.#...#....
.#...#####
.#...##...
.#...##...
.#...##...
.#..####..
########..
.#######..
.#...#.#..`;

export const EXAMPLE_SOLUTION = 46;

export const SOLUTION = 7060;

export const INPUT = readFileSync("./src/day-16/part-1/input.txt")
  .toString()
  .trim();
