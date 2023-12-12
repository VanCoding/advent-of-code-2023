import { createPipe, map, pipe, sumBy, filter, sortBy } from "remeda";

export type Query = {
  text: string;
  value: number;
};

const QUERIES: Query[] = [
  { text: "0", value: 0 },
  { text: "1", value: 1 },
  { text: "2", value: 2 },
  { text: "3", value: 3 },
  { text: "4", value: 4 },
  { text: "5", value: 5 },
  { text: "6", value: 6 },
  { text: "7", value: 7 },
  { text: "8", value: 8 },
  { text: "9", value: 9 },
];

type Match = { query: Query; index: number };

const find = (
  input: string,
  queries: Query[],
  kind: "first" | "last"
): Match | undefined =>
  pipe(
    queries,
    map(
      (query) =>
        ({
          query,
          index:
            kind === "first"
              ? input.indexOf(query.text)
              : input.lastIndexOf(query.text),
        } satisfies Match)
    ),
    filter((v) => v.index >= 0),
    sortBy([(v) => v.index, kind === "first" ? "asc" : "desc"])
  )[0];

const firstPlusLast = (line: string, queries: Query[]) => {
  const first = find(line, queries, "first");
  const last = find(line, queries, "last");
  return +(first!.query.value + "" + last!.query.value);
};

const toLines = (input: string) => input.split("\n");

const solveLine = (line: string, queries = QUERIES) =>
  firstPlusLast(line, queries);

export const solveLines = (input: string, queries = QUERIES) =>
  pipe(
    toLines(input),
    map((v) => solveLine(v, queries))
  );

export const solve = (input: string, queries = QUERIES) =>
  pipe(
    input,
    (v) => solveLines(v, queries),
    sumBy((v) => v)
  );
