import { describe, it, expect } from "vitest";
import { solve } from "./exercise";
import { EXAMPLE_INPUT, INPUT } from "../part-1/input";
import { EXAMPLE_SOLUTION, SOLUTION } from "./input";
describe("solve", () => {
  it("solves example correctly", () => {
    expect(solve(EXAMPLE_INPUT)).toEqual(EXAMPLE_SOLUTION);
  });

  it("solves exercise correctly", () => {
    expect(solve(INPUT)).toEqual(SOLUTION);
  });
});
