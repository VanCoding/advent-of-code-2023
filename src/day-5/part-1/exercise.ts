import { minBy } from "remeda";

type Data = {
  seeds: number[];
  mappings: Mappings;
};

type Mappings = Record<string, Mapping[]>;

type Mapping = {
  sourceStart: number;
  destinationStart: number;
  range: number;
};

const chain = [
  "seed",
  "soil",
  "fertilizer",
  "water",
  "light",
  "temperature",
  "humidity",
  "location",
] as const;

type Kind = (typeof chain)[number];

export const parseData = (input: string): Data => {
  const [seeds, ...mappings] = input.split("\n\n");

  return {
    seeds: parseSeeds(seeds),
    mappings: Object.fromEntries(
      mappings
        .map(parseMapping)
        .map((mapping) => [mapping.name, mapping.mappings])
    ),
  };
};

const parseNumbers = (numbers: string) =>
  numbers.split(" ").map((number) => +number);

const parseSeeds = (line: string) => {
  const [name, numbers] = line.split(": ");
  return parseNumbers(numbers);
};

const parseMapping = (input: string): { name: string; mappings: Mapping[] } => {
  const [header, ...mappings] = input.split("\n");
  return {
    name: header.split(" ")[0],
    mappings: mappings.map((numbers) => {
      const [destinationStart, sourceStart, range] = parseNumbers(numbers);
      return { destinationStart, sourceStart, range };
    }),
  };
};

export const mapId = (
  sourceKind: Kind,
  targetKind: Kind,
  sourceId: number,
  mappings: Mappings
): number => {
  const mapping = mappings[`${sourceKind}-to-${targetKind}`].find(
    (mapping) =>
      mapping.sourceStart <= sourceId &&
      mapping.sourceStart + mapping.range > sourceId
  );
  if (!mapping) return sourceId;
  return mapping.destinationStart + (sourceId - mapping.sourceStart);
};

export const mapSeedIdToLocationId = (
  seedId: number,
  mappings: Mappings
): number => {
  let id = seedId;
  for (let i = 0; i < chain.length - 1; i++) {
    id = mapId(chain[i], chain[i + 1], id, mappings);
  }
  return id;
};

export const solve = (input: string): number => {
  const data = parseData(input);
  const locations = data.seeds.map((seed) =>
    mapSeedIdToLocationId(seed, data.mappings)
  );
  return minBy(locations, (v) => v) ?? 0;
};
