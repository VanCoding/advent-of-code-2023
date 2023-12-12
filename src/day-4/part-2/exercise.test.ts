import { describe, it, expect } from "vitest";
import { EXAMPLE_INPUT, INPUT } from "../part-1/input";
import { EXAMPLE_CARD_COUNTS, EXAMPLE_SOLUTION, SOLUTION } from "./input";
import { getCardCounts, solve } from "./exercise";

describe("getCardCounts", () => {
  it("gets correct card counts for example", () => {
    expect(getCardCounts(EXAMPLE_INPUT)).toEqual(EXAMPLE_CARD_COUNTS);
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
