import { describe, expect, it } from "vitest";
import {
  getFocusingPowers,
  parseOperations,
  prepareBoxes,
  solve,
} from "./exercise";
import { EXAMPLE_INPUT, INPUT } from "../part-1/input";
import {
  EXAMPLE_FOCUSING_POWERS,
  EXAMPLE_PREPARED_BOXES,
  EXAMPLE_SOLUTION,
  SOLUTION,
} from "./input";

describe("prepareBoxes", () => {
  it("prepares example boxes correctly", () => {
    expect(prepareBoxes(parseOperations(EXAMPLE_INPUT))).toEqual(
      EXAMPLE_PREPARED_BOXES
    );
  });
});

describe("getFocusingPowers", () => {
  it("gets correct focusing powers of example", () => {
    expect(
      getFocusingPowers(prepareBoxes(parseOperations(EXAMPLE_INPUT)))
    ).toEqual(EXAMPLE_FOCUSING_POWERS);
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
