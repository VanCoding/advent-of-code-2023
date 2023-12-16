import { describe, it, expect } from "vitest";
import { getStepCount, parse, solve } from "./exercise";
import {
  EXAMPLE_1_INPUT,
  EXAMPLE_1_STEPS,
  EXAMPLE_2_INPUT,
  EXAMPLE_2_STEPS,
  INPUT,
  SOLUTION,
} from "./input";

describe("parse", () => {
  it("correctly parses example 1", () => {
    expect(parse(EXAMPLE_1_INPUT)).toEqual({
      directions: {
        AAA: {
          LEFT: "BBB",
          RIGHT: "CCC",
        },
        BBB: {
          LEFT: "DDD",
          RIGHT: "EEE",
        },
        CCC: {
          LEFT: "ZZZ",
          RIGHT: "GGG",
        },
        DDD: {
          LEFT: "DDD",
          RIGHT: "DDD",
        },
        EEE: {
          LEFT: "EEE",
          RIGHT: "EEE",
        },
        GGG: {
          LEFT: "GGG",
          RIGHT: "GGG",
        },
        ZZZ: {
          LEFT: "ZZZ",
          RIGHT: "ZZZ",
        },
      },
      sides: ["RIGHT", "LEFT"],
    });
  });
});

describe("getStepCount", () => {
  it("gets correct step count for example 1", () => {
    expect(getStepCount("AAA", "ZZZ", parse(EXAMPLE_1_INPUT))).toEqual(
      EXAMPLE_1_STEPS
    );
  });
  it("gets correct step count for example 2", () => {
    expect(getStepCount("AAA", "ZZZ", parse(EXAMPLE_2_INPUT))).toEqual(
      EXAMPLE_2_STEPS
    );
  });
});

describe("solve", () => {
  it("solves example 1 correctly", () => {
    expect(solve(EXAMPLE_1_INPUT)).toEqual(EXAMPLE_1_STEPS);
  });
  it("solves example 2 correctly", () => {
    expect(solve(EXAMPLE_2_INPUT)).toEqual(EXAMPLE_2_STEPS);
  });
  it("solves exercise correctly", () => {
    expect(solve(INPUT)).toEqual(SOLUTION);
  });
});
