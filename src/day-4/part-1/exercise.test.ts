import { describe, expect, it } from "vitest";
import {
  getCardsMatchingNumberCount,
  getCardsPoints,
  parseCards,
  solve,
} from "./exercise";
import {
  EXAMPLE_CARD_MATCHING_NUMBER_COUNT,
  EXAMPLE_CARD_POINTS,
  EXAMPLE_INPUT,
  EXAMPLE_SOLUTION,
  INPUT,
  SOLUTION,
} from "./input";

describe("parseCards", () => {
  it("parses cards correctly", () => {
    expect(parseCards(EXAMPLE_INPUT)).toEqual([
      {
        actualNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
        winningNumbers: [41, 48, 83, 86, 17],
      },
      {
        actualNumbers: [61, 30, 68, 82, 17, 32, 24, 19],
        winningNumbers: [13, 32, 20, 16, 61],
      },
      {
        actualNumbers: [69, 82, 63, 72, 16, 21, 14, 1],
        winningNumbers: [1, 21, 53, 59, 44],
      },
      {
        actualNumbers: [59, 84, 76, 51, 58, 5, 54, 83],
        winningNumbers: [41, 92, 73, 84, 69],
      },
      {
        actualNumbers: [88, 30, 70, 12, 93, 22, 82, 36],
        winningNumbers: [87, 83, 26, 28, 32],
      },
      {
        actualNumbers: [74, 77, 10, 23, 35, 67, 36, 11],
        winningNumbers: [31, 18, 13, 56, 72],
      },
    ]);
  });
});

describe("getCardsMatchingNumberCount", () => {
  it("gets correct matching number counts for example", () => {
    expect(getCardsMatchingNumberCount(EXAMPLE_INPUT)).toEqual(
      EXAMPLE_CARD_MATCHING_NUMBER_COUNT
    );
  });
});

describe("getCardsPoints", () => {
  it("gets correct card points for example", () => {
    expect(getCardsPoints(EXAMPLE_INPUT)).toEqual(EXAMPLE_CARD_POINTS);
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
