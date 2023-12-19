import { describe, expect, it } from "vitest";
import { getValidPossibilities, parsePuzzles, solve } from "./exercise";
import {
  EXAMPLE_INPUT,
  EXAMPLE_POSSIBILITIES,
  EXAMPLE_SOLUTION,
  INPUT,
  SOLUTION,
} from "./input";

describe("getValidPossibilities", () => {
  it("gets correct possibilities for example", () => {
    expect(
      parsePuzzles(EXAMPLE_INPUT).map((p) => getValidPossibilities(p))
    ).toEqual(EXAMPLE_POSSIBILITIES);
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
