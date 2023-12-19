import { describe, expect, it } from "vitest";
import {
  EXAMPLE_INPUT,
  EXAMPLE_SOLUTION,
  EXAMPLE_TILTED,
  INPUT,
  SOLUTION,
} from "./input";
import { parse, solve, tilt } from "./exercise";

describe("tilt", () => {
  it("tilts example platform correctly", () => {
    expect(tilt(parse(EXAMPLE_INPUT))).toEqual(parse(EXAMPLE_TILTED));
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
