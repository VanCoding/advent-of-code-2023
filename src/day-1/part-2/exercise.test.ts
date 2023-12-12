import { describe, expect, it } from "vitest";
import { solve, solveLines } from "./exercise";
import {
  EXAMPLE_INPUT,
  EXAMPLE_SOLUTION,
  EXAMPLE_SOLVED_LINES,
  INPUT,
  SOLUTION,
} from "./input";

describe("solve", () => {
  it("solves example lines", () => {
    expect(solveLines(EXAMPLE_INPUT)).toEqual(EXAMPLE_SOLVED_LINES);
  });
  it("solves example", () => {
    expect(solve(EXAMPLE_INPUT)).toEqual(EXAMPLE_SOLUTION);
  });

  it("solves exercise", () => {
    expect(solve(INPUT)).toBe(SOLUTION);
  });
});
