import { describe, expect, it } from "vitest";
import { parseTiles, processBeams, solve } from "./exercise";
import {
  EXAMPLE_ENERGIZED_MAP,
  EXAMPLE_INPUT,
  EXAMPLE_SOLUTION,
  INPUT,
  SOLUTION,
} from "./input";

describe("processBeams", () => {
  it("processes beams in example correctly", () => {
    const engergizedTiles = processBeams(
      [{ x: 0, y: 0, direction: "RIGHT" }],
      parseTiles(EXAMPLE_INPUT)
    );
    expect(
      engergizedTiles
        .map((line) =>
          line.map((tile) => (tile.length > 0 ? "#" : ".")).join("")
        )
        .join("\n")
    ).toEqual(EXAMPLE_ENERGIZED_MAP);
  });
});

describe("solve", () => {
  it("solves example correctly", () => {
    expect(solve(EXAMPLE_INPUT)).toBe(EXAMPLE_SOLUTION);
  });

  it("solves exercise correctly", () => {
    expect(solve(INPUT)).toBe(SOLUTION);
  });
});
