import { describe, it, expect } from "vitest";
import {
  expandSpace,
  getGalaxyDistance,
  parseGalaxies,
  solve,
} from "./exercise";
import { EXAMPLE_DISTANCES, EXAMPLE_INPUT, INPUT, SOLUTION } from "./input";

describe("getGalaxyDistance", () => {
  it("gets distances of example correctly", () => {
    const galaxies = expandSpace(parseGalaxies(EXAMPLE_INPUT));
    expect(
      EXAMPLE_DISTANCES.map(({ from, to }) =>
        getGalaxyDistance(galaxies[from], galaxies[to])
      )
    ).toEqual(EXAMPLE_DISTANCES.map(({ distance }) => distance));
  });
});

describe("solve", () => {
  it("solves example correctly", () => {
    expect(solve(EXAMPLE_INPUT)).toEqual(374);
  });

  it("solves exercise correctly", () => {
    expect(solve(INPUT)).toEqual(SOLUTION);
  });
});
