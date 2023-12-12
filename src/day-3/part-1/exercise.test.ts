import { describe, expect, it } from "vitest";
import {
  findNumbersInLine,
  findSymbolsInLine,
  getNumbersBorderingSymbol,
  numberBordersSymbol,
  solve,
} from "./exercise";
import {
  EXAMPLE_INPUT,
  EXAMPLE_NUMBERS,
  EXAMPLE_SOLUTION,
  INPUT,
  SOLUTION,
} from "./input";

describe("findNumbersInLine", () => {
  it("finds numbers in line", () => {
    expect(findNumbersInLine("1..22....333", 1)).toEqual([
      {
        end: 0,
        line: 1,
        start: 0,
        value: 1,
      },
      {
        end: 4,
        line: 1,
        start: 3,
        value: 22,
      },
      {
        end: 11,
        line: 1,
        start: 9,
        value: 333,
      },
    ]);
  });
});

describe("findSymbolsInLine", () => {
  it("finds symbols in line", () => {
    expect(findSymbolsInLine("1.$22...#333", 1)).toEqual([
      {
        line: 1,
        index: 2,
      },
      {
        line: 1,
        index: 8,
      },
    ]);
  });
});

describe("getNumbersBorderingSymbol", () => {
  it("gets numbers bordering a symbol in example", () => {
    expect(getNumbersBorderingSymbol(EXAMPLE_INPUT)).toEqual(EXAMPLE_NUMBERS);
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
