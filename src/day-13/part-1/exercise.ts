import { map, pipe, sumBy } from "remeda";

type Pattern = {
  verticalLines: string[];
  horizontalLines: string[];
};

export const parse = (input: string): Pattern[] =>
  input.split("\n\n").map((pattern) => {
    const horizontalLines = pattern.split("\n");

    return {
      horizontalLines,
      verticalLines: new Array(horizontalLines[0].length)
        .fill(0)
        .map((_, index) => horizontalLines.map((line) => line[index]).join("")),
    };
  });

export const normalMirror = (left: string[], right: string[]) => {
  const count = Math.max(left.length, right.length);
  for (let i = 0; i < count; i++) {
    if (left[i] && right[i] && left[i] !== right[i]) {
      return false;
    }
  }
  return true;
};

type Mirror = (left: string[], right: string[]) => boolean;

export const findReflection = (lines: string[], mirror: Mirror) => {
  for (let i = 0; i < lines.length - 1; i++) {
    if (mirror(lines.slice(0, i + 1).toReversed(), lines.slice(i + 1)))
      return i + 1;
  }
  return 0;
};

export const getPatternValue = (pattern: Pattern, mirror: Mirror) =>
  findReflection(pattern.horizontalLines, mirror) * 100 +
  findReflection(pattern.verticalLines, mirror);

export const solveWithMirror = (input: string, mirror: Mirror) =>
  pipe(
    input,
    parse,
    map((p) => getPatternValue(p, mirror)),
    sumBy((v) => v)
  );

export const solve = (input: string) => solveWithMirror(input, normalMirror);
