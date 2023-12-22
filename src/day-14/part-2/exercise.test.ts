import { describe, expect, it } from "vitest";
import { findPattern, solve } from "./exercise";
import { EXAMPLE_INPUT, INPUT } from "../part-1/input";
import { EXAMPLE_SOLUTION, SOLUTION } from "./input";

describe("findPattern", () => {
  it("finds pattern", () => {
    expect(
      findPattern([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3])
    ).toEqual([1, 2, 3]);
  });
});

describe("solve", () => {
  it("solves example correctly", () => {
    expect(solve(EXAMPLE_INPUT)).toEqual(EXAMPLE_SOLUTION);
  });

  it("solves exercise correctly", () => {
    expect(solve(INPUT)).toEqual(SOLUTION);
  });
});
