import { solveWithMirror } from "../part-1/exercise";

export const mirrorWithSmudge = (left: string[], right: string[]) => {
  const count = Math.max(left.length, right.length);
  let difference = 0;
  for (let i = 0; i < count; i++) {
    if (left[i] && right[i]) {
      for (let x = 0; x < left[i].length; x++) {
        if (left[i][x] !== right[i][x]) {
          difference++;
          if (difference > 1) return false;
        }
      }
    }
  }
  return difference === 1;
};

export const solve = (input: string) =>
  solveWithMirror(input, mirrorWithSmudge);
