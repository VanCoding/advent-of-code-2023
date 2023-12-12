import { describe, expect, it } from "vitest";
import {
  EXAMPLE_INPUT,
  EXAMPLE_SOLUTION,
  EXAMPLE_SOLVED_LINES,
  INPUT,
  SOLUTION,
} from "./input";
import { solve, solveLines } from "./exercise";

describe("solveLines", () => {
  it("solves lines correctly", () => {
    expect(solveLines(EXAMPLE_INPUT)).toEqual(EXAMPLE_SOLVED_LINES);
  });
});

describe("solve", () => {
  it("solves example", () => {
    expect(solve(EXAMPLE_INPUT)).toBe(EXAMPLE_SOLUTION);
  });
  it("solves exercise", () => {
    expect(solve(INPUT)).toBe(SOLUTION);
  });
});
