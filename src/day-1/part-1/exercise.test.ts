import { describe, expect, it } from "vitest";
import { EXAMPLE_INPUT, EXAMPLE_SOLVED_LINES, INPUT } from "./input";
import { solve, solveLines } from ".";

describe("solveLines", () => {
  it("solves lines correctly", () => {
    expect(solveLines(EXAMPLE_INPUT)).toEqual(EXAMPLE_SOLVED_LINES);
  });
});

describe("solve", () => {
  it("solves example", () => {
    expect(solve(EXAMPLE_INPUT)).toBe(142);
  });
  it("solves exercise", () => {
    expect(solve(INPUT)).toBe(54632);
  });
});
