import { describe, it, expect } from "vitest";
import { findCycle, findCycles, getStartLocations, solve } from "./exercise";
import { EXAMPLE_INPUT, SOLUTION, EXAMPLE_SOLUTION } from "./input";
import { INPUT } from "../part-1/input";
import { parse } from "../part-1/exercise";

describe("findCycle", () => {
  it("finds cycle start", () => {
    expect(findCycle("11A", parse(EXAMPLE_INPUT))).toEqual({
      first: 2,
      length: 2,
    });
  });
});

describe("findCycles", () => {
  it("finds cylces in EXAMPLE_INPUT", () => {
    const game = parse(EXAMPLE_INPUT);
    const startLocations = getStartLocations(game);
    expect(findCycles(startLocations, game)).toEqual([
      {
        first: 2,
        length: 2,
      },
      {
        first: 3,
        length: 3,
      },
    ]);
  });
  it("finds cylces in INPUT", () => {
    const game = parse(INPUT);
    const startLocations = getStartLocations(game);
    expect(findCycles(startLocations, game)).toEqual([
      {
        first: 16897,
        length: 16897,
      },
      {
        first: 16343,
        length: 16343,
      },
      {
        first: 21883,
        length: 21883,
      },
      {
        first: 13019,
        length: 13019,
      },
      {
        first: 14681,
        length: 14681,
      },
      {
        first: 20221,
        length: 20221,
      },
    ]);
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
