import { describe, expect, it } from "vitest";
import { getGearRatios, getGearedNumbers, solve } from "./exercise";
import { EXAMPLE_INPUT, INPUT } from "../part-1/input";
import {
  EXAMPLE_GEARED_NUMBERS,
  EXAMPLE_GEAR_RATIOS,
  EXAMPLE_SOLUTION,
  SOLUTION,
} from "./input";
describe("getGearedNumbers", () => {
  it("gets correct geared numbers for example", () => {
    expect(getGearedNumbers(EXAMPLE_INPUT)).toEqual(EXAMPLE_GEARED_NUMBERS);
  });
});

describe("getGearRatios", () => {
  it("gets correct gear ratios for example", () => {
    expect(getGearRatios(EXAMPLE_INPUT)).toEqual(EXAMPLE_GEAR_RATIOS);
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
