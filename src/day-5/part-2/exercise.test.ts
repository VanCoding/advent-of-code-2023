import { describe, it, expect } from "vitest";
import { EXAMPLE_INPUT, INPUT } from "../part-1/input";
import { EXAMPLE_SOLUTION, SOLUTION } from "./input";
import { getLocationRanges, seedsToSoilRanges, solve } from "./exercise";

describe("seedsToSoilRanges", () => {
  it("correctly maps seeds to soil ranges", () => {
    expect(seedsToSoilRanges(EXAMPLE_INPUT)).toEqual([]);
  });
});

describe("seedsToLocationRanges", () => {
  it("correctly maps seeds to soil ranges", () => {
    expect(getLocationRanges(EXAMPLE_INPUT)).toEqual([]);
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
