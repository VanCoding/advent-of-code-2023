import { groupBy, map, pipe, sortBy, sumBy, toPairs } from "remeda";

const cardsOrderedByRankWithoutJokers = [
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
const cardsOrderedByRankWithJoker = [
  "A",
  "K",
  "Q",
  "T",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "J",
] as const;

type Card = (typeof cardsOrderedByRankWithoutJokers)[number];

type CardCounts = Array<{ card: Card; count: number }>;

type Rules = {
  withJokers: boolean;
};

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

export const getCountsOfHand = (hand: Hand): CardCounts =>
  pipe(
    hand.cards,
    groupBy((card) => card),
    toPairs,
    map(([card, cards]) => ({ card: card as Card, count: cards.length }))
  );

const isFullHouseWithoutJokers = (hand: Hand) => {
  const counts = getCountsOfHand(hand);
  return (
    counts.some(({ count }) => count === 3) &&
    counts.some(({ count }) => count === 2)
  );
};

const isCountOfAKindWithoutJokers = (minCount: number) => (hand: Hand) =>
  getCountsOfHand(hand).some(({ count }) => count >= minCount);

const isTwoPairs = (hand: Hand) =>
  getCountsOfHand(hand).filter(({ count }) => count === 2).length === 2;

const handTypesOrderedByRankWithoutJokers: Array<(hand: Hand) => boolean> = [
  isCountOfAKindWithoutJokers(5),
  isCountOfAKindWithoutJokers(4),
  isFullHouseWithoutJokers,
  isCountOfAKindWithoutJokers(3),
  isTwoPairs,
  isCountOfAKindWithoutJokers(2),
];

const isFullHouseWithJoker = (hand: Hand) => {
  const counts = getCountsOfHand(hand);
  if (
    counts.some(({ count }) => count === 3) &&
    counts.some(({ count }) => count === 2)
  ) {
    return true;
  }
  const jokers = counts.find((count) => count.card === "J")?.count ?? 0;
  const [first, second] = sortBy(
    counts.filter(({ card }) => card !== "J"),
    [(c) => c.count, "desc"]
  );
  return 3 - first.count + (2 - second.count) <= jokers;
};

const isCountOfAKindWithJoker = (minCount: number) => (hand: Hand) => {
  const counts = getCountsOfHand(hand);
  if (counts.some(({ count }) => count >= minCount)) return true;
  const jokers = counts.find((count) => count.card === "J")?.count ?? 0;
  const [first] = sortBy(
    counts.filter(({ card }) => card !== "J"),
    [(c) => c.count, "desc"]
  );
  return minCount - first.count <= jokers;
};

const handTypesOrderedByRankWithJoker: Array<(hand: Hand) => boolean> = [
  isCountOfAKindWithJoker(5),
  isCountOfAKindWithJoker(4),
  isFullHouseWithJoker,
  isCountOfAKindWithJoker(3),
  isTwoPairs,
  isCountOfAKindWithJoker(2),
];

export const getScoreOfHandType = (rules: Rules) => (hand: Hand) => {
  const handTypes = rules.withJokers
    ? handTypesOrderedByRankWithJoker
    : handTypesOrderedByRankWithoutJokers;
  for (let i = 0; i < handTypes.length; i++) {
    if (handTypes[i](hand)) return handTypes.length - i;
  }
  return 0;
};

const getScoreOfHandCardAt =
  (rules: Rules, cardIndex: number) => (hand: Hand) => {
    const cards = rules.withJokers
      ? cardsOrderedByRankWithJoker
      : cardsOrderedByRankWithoutJokers;
    return cards.length - cards.indexOf(hand.cards[cardIndex]);
  };

export const getHandsOrderedByScore = (hands: Hand[], rules: Rules): Hand[] =>
  sortBy(
    hands,
    [getScoreOfHandType(rules), "desc"],
    [getScoreOfHandCardAt(rules, 0), "desc"],
    [getScoreOfHandCardAt(rules, 1), "desc"],
    [getScoreOfHandCardAt(rules, 2), "desc"],
    [getScoreOfHandCardAt(rules, 3), "desc"],
    [getScoreOfHandCardAt(rules, 4), "desc"]
  );

export const getHandPoints = (hands: Hand[], rules: Rules) =>
  getHandsOrderedByScore(hands, rules).map(
    (hand, index) => (hands.length - index) * hand.bid
  );

export const solveWithRules = (input: string, rules: Rules) =>
  sumBy(getHandPoints(parseHands(input), rules), (v) => v);

export const solve = (input: string) =>
  sumBy(getHandPoints(parseHands(input), { withJokers: false }), (v) => v);
