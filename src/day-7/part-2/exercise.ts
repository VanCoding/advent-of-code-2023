import { solveWithRules } from "../part-1/exercise";

export const solve = (input: string) =>
  solveWithRules(input, { withJokers: true });
