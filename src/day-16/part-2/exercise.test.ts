import { describe, expect, it } from "vitest";
import { solve } from "./exercise";
import { EXAMPLE_INPUT, INPUT } from "../part-1/input";
import { EXAMPLE_SOLUTION, SOLUTION } from "./input";

describe("solve", () => {
  it("solves example correctly", () => {
    expect(solve(EXAMPLE_INPUT)).toBe(EXAMPLE_SOLUTION);
  });

  it("solves exercise correctly", () => {
    expect(solve(INPUT)).toBe(SOLUTION);
  });
});
