import { describe, expect, it } from "vitest";
import { solve } from "./exercise";
import { EXAMPLE_INPUT, INPUT } from "../part-1/input";
import { EXAMPLE_ORDER, EXAMPLE_SOLUTION, SOLUTION } from "./input";
import {
  getHandsOrderedByScore,
  getScoreOfHandType,
  parseHands,
} from "../part-1/exercise";

describe("getHandTypeScore", () => {
  it("correctly gets type scores of example hands", () => {
    expect(
      parseHands(EXAMPLE_INPUT).map(getScoreOfHandType({ withJokers: true }))
    ).toEqual([1, 5, 2, 5, 5]);
  });
});

describe("getHandsOrderedByScore", () => {
  it("orders example hands correctly", () => {
    expect(
      getHandsOrderedByScore(parseHands(EXAMPLE_INPUT), {
        withJokers: true,
      }).map((hand) => hand.id)
    ).toEqual(EXAMPLE_ORDER);
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
