import { map, minBy, pipe } from "remeda";
import { Mapping, chain, parseData } from "../part-1/exercise";

type Ranges = [number, number][];

const seedsToRanges = (seeds: number[]) => {
  const ranges: Ranges = [];
  for (let i = 0; i < seeds.length; i += 2) {
    ranges.push([seeds[i], seeds[i] + seeds[i + 1] - 1]);
  }
  return ranges;
};

const mapSourceRangesToTargetRanges = (
  inputRanges: Ranges,
  mappings: Mapping[]
): Ranges => {
  const outputRanges: Ranges = [];
  for (const mapping of mappings) {
    for (let i = 0; i < inputRanges.length; i++) {
      const [from, to] = inputRanges[i];
      if (
        to < mapping.sourceStart ||
        from >= mapping.sourceStart + mapping.range
      ) {
        //no overlap
        continue;
      } else {
        if (from < mapping.sourceStart) {
          if (to >= mapping.sourceStart + mapping.range) {
            //split
            inputRanges.splice(
              i,
              1,
              [from, mapping.sourceStart - 1],
              [mapping.sourceStart + mapping.range, to]
            );
            i++;
            outputRanges.push([
              mapping.destinationStart,
              mapping.destinationStart + mapping.range - 1,
            ]);
          } else {
            //cut right
            inputRanges.splice(i, 1, [from, mapping.sourceStart - 1]);
            outputRanges.push([
              mapping.destinationStart,
              mapping.destinationStart + (to - mapping.sourceStart),
            ]);
          }
        } else {
          if (to >= mapping.sourceStart + mapping.range) {
            // cut left
            inputRanges.splice(i, 1, [mapping.sourceStart + mapping.range, to]);
            outputRanges.push([
              mapping.destinationStart + (from - mapping.sourceStart),
              mapping.destinationStart + mapping.range - 1,
            ]);
          } else {
            // cut completely
            inputRanges.splice(i, 1);
            i--;
            outputRanges.push([
              mapping.destinationStart + (from - mapping.sourceStart),
              mapping.destinationStart + (to - mapping.sourceStart),
            ]);
          }
        }
      }
    }
  }
  const result = mergeRanges([...inputRanges, ...outputRanges]);
  return result;
};

const mergeRanges = (ranges: Ranges): Ranges => {
  for (let i = 0; i < ranges.length - 1; i++) {
    for (let j = i + 1; j < ranges.length; j++) {
      const a = ranges[i];
      const b = ranges[j];
      if (a[1] < b[0] || a[0] > b[1]) continue;
      a[0] = Math.min(a[0], b[0]);
      a[1] = Math.max(a[1], b[1]);
      ranges.splice(j, 1);
      j = i;
    }
  }
  return ranges;
};

export const seedsToSoilRanges = (input: string) => {
  const data = parseData(input);
  const seedRanges = seedsToRanges(data.seeds);
  return mapSourceRangesToTargetRanges(
    seedRanges,
    data.mappings["seed-to-soil"]
  );
};

export const getLocationRanges = (input: string) => {
  const data = parseData(input);
  let ranges = seedsToRanges(data.seeds);
  for (let i = 0; i < chain.length - 1; i++) {
    ranges = mapSourceRangesToTargetRanges(
      ranges,
      data.mappings[`${chain[i]}-to-${chain[i + 1]}`]
    );
  }
  return ranges;
};

export const solve = (input: string) => {
  const locationRanges = getLocationRanges(input);
  return pipe(
    locationRanges,
    map((v) => v[0]),
    minBy((v) => v)
  );
};
