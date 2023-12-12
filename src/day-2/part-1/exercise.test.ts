import { describe, expect, it } from "vitest";
import { Game, gameIsPossible, parseGames, solve } from "./exercise";
import {
  EXAMPLE_DICE_COUNTS,
  EXAMPLE_GAMES,
  EXAMPLE_POSSIBILITIES,
  EXAMPLE_SOLUTION,
  DICE_COUNTS,
  GAMES,
  SOLUTION,
} from "./input";

describe("parseGames", () => {
  it("parses games correctly", () => {
    expect(parseGames(EXAMPLE_GAMES)).toEqual([
      {
        id: 1,
        sets: [
          { blue: 3, red: 4, green: 0 },
          { blue: 6, red: 1, green: 2 },
          { blue: 0, red: 0, green: 2 },
        ],
      },
      {
        id: 2,
        sets: [
          { blue: 1, red: 0, green: 2 },
          { blue: 4, red: 1, green: 3 },
          { blue: 1, red: 0, green: 1 },
        ],
      },
      {
        id: 3,
        sets: [
          { blue: 6, red: 20, green: 8 },
          { blue: 5, red: 4, green: 13 },
          { blue: 0, red: 1, green: 5 },
        ],
      },
      {
        id: 4,
        sets: [
          { blue: 6, red: 3, green: 1 },
          { blue: 0, red: 6, green: 3 },
          { blue: 15, red: 14, green: 3 },
        ],
      },
      {
        id: 5,
        sets: [
          { blue: 1, red: 6, green: 3 },
          { blue: 2, red: 1, green: 2 },
        ],
      },
    ] satisfies Game[]);
  });
});

describe("gameIsPossible", () => {
  it("properly detects game possibility on example games", () => {
    expect(
      parseGames(EXAMPLE_GAMES).map((game) =>
        gameIsPossible(game, EXAMPLE_DICE_COUNTS)
      )
    ).toEqual(EXAMPLE_POSSIBILITIES);
  });
});

describe("solve", () => {
  it("properly solves example", () => {
    expect(solve(EXAMPLE_GAMES, EXAMPLE_DICE_COUNTS)).toEqual(EXAMPLE_SOLUTION);
  });
  it("properly solves exercise", () => {
    expect(solve(GAMES, DICE_COUNTS)).toEqual(SOLUTION);
  });
});
