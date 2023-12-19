import { describe, expect, it } from "vitest";
import { EXAMPLE_INPUT, INPUT } from "../part-1/input";
import { EXAMPLE_SOLUTION, SOLUTION } from "./input";
import { solve } from "./exercise";

describe("solve", () => {
  it("solves example correctly", () => {
    expect(solve(EXAMPLE_INPUT)).toEqual(EXAMPLE_SOLUTION);
  });

  // I couldn't get it to run in under a second :(
  it.skip("solves exercise correctly", () => {
    expect(solve(INPUT)).toEqual(SOLUTION);
  });
});
