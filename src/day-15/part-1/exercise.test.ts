import { describe, expect, it } from "vitest";
import {
  EXAMPLE_INPUT,
  EXAMPLE_SOLUTION,
  EXAMPLE_STEPS,
  INPUT,
  SOLUTION,
} from "./input";
import { hash, parse, solve } from "./exercise";

describe("hash", () => {
  it("hashes example sequences correctly", () => {
    expect(parse(EXAMPLE_INPUT).map(hash)).toEqual(EXAMPLE_STEPS);
  });

  it("hashes rn and cm to the same value", () => {
    expect(hash("rn")).toEqual(hash("cm"));
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
