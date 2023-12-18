import { describe, expect, it } from "vitest";
import { getNextValues, parseSequences, solve } from "./exercise";
import {
  EXAMPLE_INPUT,
  EXAMPLE_NEXT_VALUES,
  EXAMPLE_SOLUTION,
  INPUT,
  SOLUTION,
} from "./input";

describe("parseSequences", () => {
  it("parses example correctly", () => {
    expect(parseSequences(EXAMPLE_INPUT)).toEqual([
      [0, 3, 6, 9, 12, 15],
      [1, 3, 6, 10, 15, 21],
      [10, 13, 16, 21, 30, 45],
    ]);
  });
});

describe("getNextValue", () => {
  it("gets correct next values for example", () => {
    expect(getNextValues(parseSequences(EXAMPLE_INPUT))).toEqual(
      EXAMPLE_NEXT_VALUES
    );
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
