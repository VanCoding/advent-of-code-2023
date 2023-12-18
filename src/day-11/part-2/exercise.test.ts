import { describe, expect, it } from "vitest";
import { INPUT } from "../part-1/input";
import { SOLUTION } from "./input";
import { solve } from "./exercise";

describe("solve", () => {
  it("solves exercise correctly", () => {
    expect(solve(INPUT)).toEqual(SOLUTION);
  });
});
