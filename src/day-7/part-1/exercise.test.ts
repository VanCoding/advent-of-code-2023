import { describe, expect, it } from "vitest";
import {
  EXAMPLE_INPUT,
  EXAMPLE_ORDER,
  EXAMPLE_SOLUTION,
  INPUT,
  SOLUTION,
} from "./input";
import {
  Hand,
  getCountsOfHand,
  getScoreOfHandType,
  getHandsOrderedByScore,
  parseHands,
  solve,
} from "./exercise";

describe("parseHands", () => {
  it("parses example hands correctly", () => {
    expect(parseHands(EXAMPLE_INPUT)).toEqual([
      {
        bid: 765,
        cards: ["3", "2", "T", "3", "K"],
        id: 0,
      },
      {
        bid: 684,
        cards: ["T", "5", "5", "J", "5"],
        id: 1,
      },
      {
        bid: 28,
        cards: ["K", "K", "6", "7", "7"],
        id: 2,
      },
      {
        bid: 220,
        cards: ["K", "T", "J", "J", "T"],
        id: 3,
      },
      {
        bid: 483,
        cards: ["Q", "Q", "Q", "J", "A"],
        id: 4,
      },
    ] satisfies Hand[]);
  });
});

describe("getCountsOfHand", () => {
  it("gets correct card counts of example hands", () => {
    expect(parseHands(EXAMPLE_INPUT).map(getCountsOfHand)).toEqual([
      [2, 1, 1, 1],
      [3, 1, 1],
      [2, 2, 1],
      [2, 2, 1],
      [3, 1, 1],
    ]);
  });
});

describe("getHandTypeScore", () => {
  it("correctly gets type scores of example hands", () => {
    expect(parseHands(EXAMPLE_INPUT).map(getScoreOfHandType)).toEqual([]);
  });
});

describe("getHandsOrderedByScore", () => {
  it("orders example hands correctly", () => {
    expect(
      getHandsOrderedByScore(parseHands(EXAMPLE_INPUT)).map((hand) => hand.id)
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
