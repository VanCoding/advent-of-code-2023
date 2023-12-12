import { describe, expect, it } from "vitest";
import { parseGames } from "../part-1/exercise";
import { EXAMPLE_GAMES, GAMES } from "../part-1/input";
import { getGamePower, solve } from "./exercise";
import { EXAMPLE_GAME_POWERS, EXAMPLE_SOLUTION, SOLUTION } from "./input";

describe("getGamePower", () => {
  it("correclty get powers of example games", () => {
    expect(parseGames(EXAMPLE_GAMES).map(getGamePower)).toEqual(
      EXAMPLE_GAME_POWERS
    );
  });
});

describe("solve", () => {
  it("correclty solves example", () => {
    expect(solve(EXAMPLE_GAMES)).toEqual(EXAMPLE_SOLUTION);
  });
  it("correclty solves example", () => {
    expect(solve(GAMES)).toEqual(SOLUTION);
  });
});
