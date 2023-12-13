import { range } from "remeda";

export type Game = {
  duration: number;
  distance: number;
};

export const parseGames = (input: string): Game[] => {
  const [timeLine, distanceLine] = input.split("\n");
  const durations = parseSeries(timeLine);
  const distances = parseSeries(distanceLine);
  return durations.map((duration, index) => ({
    duration,
    distance: distances[index],
  }));
};

const parseSeries = (line: string) => {
  const [header, numbers] = line.split(":");
  return numbers
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map((n) => +n);
};

const playGame = (
  duration: number,
  buttonPressDuration: number
): { distance: number; buttonPressDuration: number } => {
  return {
    distance: (duration - buttonPressDuration) * buttonPressDuration,
    buttonPressDuration,
  };
};

const getLowestWinningButtonPressTime = (game: Game) => {
  for (
    let buttonPressTime = 0;
    buttonPressTime < game.duration;
    buttonPressTime++
  ) {
    if (playGame(game.duration, buttonPressTime).distance > game.distance)
      return buttonPressTime;
  }
  return 0;
};

const getHighestWinningButtonPressTime = (game: Game) => {
  for (
    let buttonPressTime = game.duration - 1;
    buttonPressTime >= 0;
    buttonPressTime--
  ) {
    if (playGame(game.duration, buttonPressTime).distance > game.distance)
      return buttonPressTime;
  }
  return 0;
};

export const getWinningGameDistances = (game: Game): number[] => {
  const lowest = getLowestWinningButtonPressTime(game);
  const highest = getHighestWinningButtonPressTime(game);
  return range(lowest, highest + 1);
};

export const getWinningGameCounts = (games: Game[]) =>
  games.map((game) => {
    const lowest = getLowestWinningButtonPressTime(game);
    const highest = getHighestWinningButtonPressTime(game);
    return highest - lowest + 1;
  });

export const getWinningGameCountsFromInput = (input: string) =>
  getWinningGameCounts(parseGames(input));

const power = (numbers: number[]) => numbers.reduce((power, n) => power * n, 1);

export const solveGames = (games: Game[]) => power(getWinningGameCounts(games));
export const solve = (input: string) =>
  power(getWinningGameCountsFromInput(input));
