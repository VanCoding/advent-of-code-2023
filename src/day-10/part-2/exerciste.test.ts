import { describe, expect, it } from "vitest";
import { solve } from "./exercise";
import {
  EXAMPLE_1_INPUT,
  EXAMPLE_1_SOLUTION,
  EXAMPLE_2_INPUT,
  EXAMPLE_2_SOLUTION,
  SOLUTION,
} from "./input";
import { INPUT } from "../part-1/input";

describe("solve", () => {
  it("solves example 1 correctly", () => {
    expect(solve(EXAMPLE_1_INPUT)).toEqual(EXAMPLE_1_SOLUTION);
  });

  it("solves example 2 correctly", () => {
    expect(solve(EXAMPLE_2_INPUT)).toEqual(EXAMPLE_2_SOLUTION);
  });

  it("solves exercise correctly", () => {
    expect(solve(INPUT)).toEqual(SOLUTION);
  });
});
