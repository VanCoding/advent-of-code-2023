import { sumBy } from "remeda";

export type Card = {
  winningNumbers: number[];
  actualNumbers: number[];
};

export const parseCards = (input: string): Card[] =>
  input.split("\n").map((card) => {
    const [header, numbers] = card.split(": ");
    const [winningNumbers, actualNumbers] = numbers
      .split(" | ")
      .map((numberSeries) =>
        numberSeries
          .split(" ")
          .filter((n) => n)
          .map((number) => +number)
      );
    return { winningNumbers, actualNumbers };
  });

const getCardMatchingNumberCount = (card: Card) =>
  card.winningNumbers.filter((number) => card.actualNumbers.includes(number))
    .length;

const getCardPoints = (matchingNumbers: number) =>
  matchingNumbers > 2 ? Math.pow(2, matchingNumbers - 1) : matchingNumbers;

export const getCardsMatchingNumberCount = (input: string) =>
  parseCards(input).map(getCardMatchingNumberCount);

export const getCardsPoints = (input: string) =>
  getCardsMatchingNumberCount(input).map(getCardPoints);

export const solve = (input: string) => sumBy(getCardsPoints(input), (v) => v);
