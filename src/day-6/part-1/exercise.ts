type Game = {
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
  let speed = 0;
  let distance = 0;
  for (let time = 0; time < duration; time++) {
    const pressingButton = buttonPressDuration > time;
    if (pressingButton) {
      speed += 1;
    } else {
      distance += speed;
    }
  }
  return { distance, buttonPressDuration };
};

const getGameDistances = (game: Game) => {
  return new Array(game.duration)
    .fill(0)
    .map((_, index) => playGame(game.duration, index));
};

export const getWinningGameDistances = (game: Game): number[] =>
  getGameDistances(game)
    .filter((result) => result.distance > game.distance)
    .map((result) => result.buttonPressDuration);

export const getWinningGameCounts = (input: string) =>
  parseGames(input).map((game) => getWinningGameDistances(game).length);

const power = (numbers: number[]) => numbers.reduce((power, n) => power * n, 1);

export const getWinningGamesPower = (game: Game) =>
  power(getWinningGameDistances(game));

export const solve = (input: string) => power(getWinningGameCounts(input));
