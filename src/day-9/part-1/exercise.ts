import { pipe, reduce, sumBy } from "remeda";

export const parseSequences = (input: string): number[][] => {
  return input
    .split("\n")
    .map((line) => line.split(" ").map((number) => +number));
};

export const getGaps = (sequence: number[]): number[] => {
  const result = new Array<number>(sequence.length - 1);
  for (let i = 0; i < result.length; i++) {
    result[i] = sequence[i + 1] - sequence[i];
  }
  return result;
};

const getGapSequences = (sequence: number[]): number[][] => {
  if (!sequence.some((n) => n !== 0)) return [sequence];
  return [sequence, ...getGapSequences(getGaps(sequence))];
};

const getLastValues = (sequences: number[][]): number[] =>
  sequences.map((sequence) => sequence[sequence.length - 1]);

const getNextValue = (sequence: number[]): number => {
  const lastValues = getLastValues(getGapSequences(sequence));
  return sumBy(lastValues, (v) => v);
};

export const getNextValues = (sequences: number[][]): number[] =>
  sequences.map(getNextValue);

export const solve = (input: string) =>
  pipe(
    input,
    parseSequences,
    getNextValues,
    sumBy((v) => v)
  );
