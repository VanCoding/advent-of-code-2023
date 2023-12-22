import { map, pipe, sumBy } from "remeda";

export const parse = (input: string) => input.split(",");

export const hash = (sequence: string) =>
  sequence
    .split("")
    .map((c) => c.charCodeAt(0))
    .reduce((total, c) => ((total + c) * 17) % 256, 0);

export const solve = (input: string) =>
  pipe(
    input,
    parse,
    map(hash),
    sumBy((v) => v)
  );
