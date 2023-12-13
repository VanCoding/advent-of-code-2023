import { describe, it, expect } from "vitest";
import { mapId, mapSeedIdToLocationId, parseData, solve } from "./exercise";
import {
  EXAMPLE_INPUT,
  EXAMPLE_LOCATIONS,
  EXAMPLE_SOILS,
  EXAMPLE_SOLUTION,
  INPUT,
  SOLUTION,
} from "./input";

describe("parseData", () => {
  it("parses data correctly", () => {
    expect(parseData(EXAMPLE_INPUT)).toEqual({
      mappings: {
        "fertilizer-to-water": [
          {
            destinationStart: 49,
            range: 8,
            sourceStart: 53,
          },
          {
            destinationStart: 0,
            range: 42,
            sourceStart: 11,
          },
          {
            destinationStart: 42,
            range: 7,
            sourceStart: 0,
          },
          {
            destinationStart: 57,
            range: 4,
            sourceStart: 7,
          },
        ],
        "humidity-to-location": [
          {
            destinationStart: 60,
            range: 37,
            sourceStart: 56,
          },
          {
            destinationStart: 56,
            range: 4,
            sourceStart: 93,
          },
        ],
        "light-to-temperature": [
          {
            destinationStart: 45,
            range: 23,
            sourceStart: 77,
          },
          {
            destinationStart: 81,
            range: 19,
            sourceStart: 45,
          },
          {
            destinationStart: 68,
            range: 13,
            sourceStart: 64,
          },
        ],
        "seed-to-soil": [
          {
            destinationStart: 50,
            range: 2,
            sourceStart: 98,
          },
          {
            destinationStart: 52,
            range: 48,
            sourceStart: 50,
          },
        ],
        "soil-to-fertilizer": [
          {
            destinationStart: 0,
            range: 37,
            sourceStart: 15,
          },
          {
            destinationStart: 37,
            range: 2,
            sourceStart: 52,
          },
          {
            destinationStart: 39,
            range: 15,
            sourceStart: 0,
          },
        ],
        "temperature-to-humidity": [
          {
            destinationStart: 0,
            range: 1,
            sourceStart: 69,
          },
          {
            destinationStart: 1,
            range: 69,
            sourceStart: 0,
          },
        ],
        "water-to-light": [
          {
            destinationStart: 88,
            range: 7,
            sourceStart: 18,
          },
          {
            destinationStart: 18,
            range: 70,
            sourceStart: 25,
          },
        ],
      },
      seeds: [79, 14, 55, 13],
    });
  });
});

describe("mapId", () => {
  it("maps seeds of example correctly to soils", () => {
    const data = parseData(EXAMPLE_INPUT);
    expect(
      data.seeds.map((seedId) => mapId("seed", "soil", seedId, data.mappings))
    ).toEqual(EXAMPLE_SOILS);
  });
});

describe("mapSeedIdToLocationId", () => {
  it("maps seeds of example correctly to locations", () => {
    const data = parseData(EXAMPLE_INPUT);
    expect(
      data.seeds.map((seed) => mapSeedIdToLocationId(seed, data.mappings))
    ).toEqual(EXAMPLE_LOCATIONS);
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
