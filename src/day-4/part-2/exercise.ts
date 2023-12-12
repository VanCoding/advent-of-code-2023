import { sumBy } from "remeda";
import { getCardsMatchingNumberCount } from "../part-1/exercise";

type CardStack = {
  matchingNumbers: number;
  count: number;
};

const parseCardStacks = (input: string): CardStack[] =>
  getCardsMatchingNumberCount(input).map((matchingNumbers) => ({
    matchingNumbers,
    count: 1,
  }));

export const getCardCounts = (input: string) => {
  const cardStacks = parseCardStacks(input);
  for (let i = 0; i < cardStacks.length; i++) {
    const stack = cardStacks[i];
    for (let j = 0; j < stack.matchingNumbers; j++) {
      cardStacks[i + j + 1].count += stack.count;
    }
  }
  return cardStacks.map((stack) => stack.count);
};

export const solve = (input: string) => sumBy(getCardCounts(input), (v) => v);
