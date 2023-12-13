import { describe, it, expect } from "vitest";
import {
  getWinningGameCounts,
  getWinningGameDistances,
  parseGames,
  solve,
} from "./exercise";
import {
  EXAMPLE_INPUT,
  EXAMPLE_SOLUTION,
  EXAMPLE_WINNING_POSSIBILITIES,
  EXAMPLE_WINNING_SECONDS,
  INPUT,
  SOLUTION,
} from "./input";

describe("parseGames", () => {
  it("parses example game correctly", () => {
    expect(parseGames(EXAMPLE_INPUT)).toEqual([
      { duration: 7, distance: 9 },
      { duration: 15, distance: 40 },
      { duration: 30, distance: 200 },
    ]);
  });
});

describe("getWinningGameDistances", () => {
  it("gets winning distances of example game 1 correctly", () => {
    expect(getWinningGameDistances(parseGames(EXAMPLE_INPUT)[0])).toEqual(
      EXAMPLE_WINNING_SECONDS
    );
  });
});

describe("getWinningGameCount", () => {
  it("gets winning game counts correctly", () => {
    expect(getWinningGameCounts(EXAMPLE_INPUT)).toEqual(
      EXAMPLE_WINNING_POSSIBILITIES
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
