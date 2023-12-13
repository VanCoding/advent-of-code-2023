import { Game, parseGames, solveGames } from "../part-1/exercise";

const combineGames = (games: Game[]): Game => {
  return {
    distance: +games.map((game) => game.distance + "").join(""),
    duration: +games.map((game) => game.duration + "").join(""),
  };
};

export const solve = (input: string) => {
  const game = combineGames(parseGames(input));
  return solveGames([game]);
};
