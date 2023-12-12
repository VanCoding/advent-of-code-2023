import { map, pipe, sumBy } from "remeda";
import {
  DiceCounts,
  Game,
  getMaxDiceCounts,
  parseGames,
} from "../part-1/exercise";

const getDiceCountPower = (set: DiceCounts) => set.blue * set.green * set.red;

export const getGamePower = (game: Game) => {
  const maxCounts = getMaxDiceCounts(game);
  return getDiceCountPower(maxCounts);
};

export const solve = (input: string) =>
  pipe(
    parseGames(input),
    map(getGamePower),
    sumBy((p) => p)
  );
