import { describe, expect, it } from "vitest";
import {
  findReflection,
  getPatternValue,
  normalMirror,
  parse,
  solve,
} from "./exercise";
import { EXAMPLE_INPUT, EXAMPLE_SOLUTION, INPUT, SOLUTION } from "./input";

describe("findReflection", () => {
  it("finds reflections in examples", () => {
    const patterns = parse(EXAMPLE_INPUT);
    expect(
      patterns
        .flatMap((p) => [p.horizontalLines, p.verticalLines])
        .map((p) => findReflection(p, normalMirror))
    ).toEqual([0, 5, 4, 0]);
  });
});

describe("getPatternValue", () => {
  it("gets correct pattern values for example", () => {
    const patterns = parse(EXAMPLE_INPUT);
    expect(patterns.map((p) => getPatternValue(p, normalMirror))).toEqual([
      5, 400,
    ]);
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
