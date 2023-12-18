import { describe, expect, it } from "vitest";
import { solve } from "./exercise";
import { EXAMPLE_INPUT, EXAMPLE_SOLUTION, INPUT, SOLUTION } from "./input";
describe("solve", () => {
  it("solves example correctly", () => {
    expect(solve(EXAMPLE_INPUT)).toEqual(EXAMPLE_SOLUTION);
  });

  it("solves exercise correctly", () => {
    expect(solve(INPUT)).toEqual(SOLUTION);
  });
});
