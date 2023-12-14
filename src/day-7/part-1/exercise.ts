import {
  first,
  groupBy,
  map,
  pipe,
  sort,
  sortBy,
  sumBy,
  toPairs,
} from "remeda";

const cardsOrderedByRank = [
  "A",
  "K",
  "Q",
  "J",
  "T",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
] as const;

type Card = (typeof cardsOrderedByRank)[number];

export type Hand = {
  id: number;
  cards: [Card, Card, Card, Card, Card];
  bid: number;
};

export const parseHands = (input: string): Hand[] =>
  input.split("\n").map((line, index) => {
    const [cards, bid] = line.split(" ");
    return {
      id: index,
      bid: +bid,
      cards: cards.split("") as Hand["cards"],
    };
  });

export const getCountsOfHand = (hand: Hand) =>
  pipe(
    hand.cards,
    groupBy((card) => card),
    toPairs,
    map((x) => x[1].length),
    sortBy([(v) => v, "desc"])
  );

const isFullHouse = (hand: Hand) => {
  const counts = getCountsOfHand(hand);
  return (
    counts.some((count) => count === 3) && counts.some((count) => count === 2)
  );
};

const isCountOfAKind = (count: number) => (hand: Hand) =>
  getCountsOfHand(hand)[0] >= count;

const isTwoPairs = (hand: Hand) =>
  getCountsOfHand(hand).filter((count) => count === 2).length === 2;

const handTypesOrderedByRank: Array<(hand: Hand) => boolean> = [
  isCountOfAKind(5),
  isCountOfAKind(4),
  isFullHouse,
  isCountOfAKind(3),
  isTwoPairs,
  isCountOfAKind(2),
];

export const getScoreOfHandType = (hand: Hand) => {
  for (let i = 0; i < handTypesOrderedByRank.length; i++) {
    if (handTypesOrderedByRank[i](hand))
      return handTypesOrderedByRank.length - i;
  }
  return 0;
};

const getScoreOfHandCardAt = (cardIndex: number) => (hand: Hand) =>
  cardsOrderedByRank.length - cardsOrderedByRank.indexOf(hand.cards[cardIndex]);

export const getHandsOrderedByScore = (hands: Hand[]): Hand[] =>
  sortBy(
    hands,
    [getScoreOfHandType, "desc"],
    [getScoreOfHandCardAt(0), "desc"],
    [getScoreOfHandCardAt(1), "desc"],
    [getScoreOfHandCardAt(2), "desc"],
    [getScoreOfHandCardAt(3), "desc"],
    [getScoreOfHandCardAt(4), "desc"]
  );

export const getHandPoints = (hands: Hand[]) =>
  getHandsOrderedByScore(hands).map(
    (hand, index) => (hands.length - index) * hand.bid
  );

export const solve = (input: string) =>
  sumBy(getHandPoints(parseHands(input)), (v) => v);
