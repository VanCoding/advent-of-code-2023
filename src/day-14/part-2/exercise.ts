import { getLoad, parse, tilt } from "../part-1/exercise";

export const findPattern = (numbers: number[]) => {
  const reversedNumbers = numbers.toReversed();

  const distance = reversedNumbers.indexOf(reversedNumbers[0], 1);
  if (distance < 0) return null;
  for (let i = 1; i <= 10; i++) {
    if (reversedNumbers[distance * i] !== reversedNumbers[0]) return null;
  }
  return numbers.slice(-distance - 1, numbers.length - 1);
};

const getStartOfPattern = (sequence: number[], pattern: number[]): number => {
  outer: for (let i = 0; i < sequence.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (sequence[i + j] !== pattern[j]) continue outer;
    }
    return i;
  }
  throw new Error("no sequence found");
};

export const solve = (input: string) => {
  const platform = parse(input);
  const loads: number[] = [];

  let pattern: number[] | null = null;
  while (!(pattern = findPattern(loads))) {
    tilt(platform, "UP");
    tilt(platform, "LEFT");
    tilt(platform, "DOWN");
    tilt(platform, "RIGHT");
    loads.push(getLoad(platform));
  }

  const startOfPattern = getStartOfPattern(loads, pattern) + 1;

  return pattern[(1000000000 - startOfPattern) % pattern.length];
};
