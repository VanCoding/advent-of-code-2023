import { maxBy } from "remeda";
import {
  Beam,
  Tiles,
  getEnergizedTileCount,
  parseTiles,
} from "../part-1/exercise";

export const getStartBeams = (tiles: Tiles): Beam[] => {
  const beams: Beam[] = [];
  for (let y = 0; y < tiles.length; y++) {
    for (let x = 0; x < tiles[y].length; x++) {
      if (y === 0) {
        beams.push({ x, y, direction: "DOWN" });
      }
      if (y === tiles.length - 1) {
        beams.push({ x, y, direction: "UP" });
      }
      if (x === 0) {
        beams.push({ x, y, direction: "RIGHT" });
      }
      if (x === tiles[y].length - 1) {
        beams.push({ x, y, direction: "LEFT" });
      }
    }
  }
  return beams;
};

export const solve = (input: string) => {
  const tiles = parseTiles(input);
  const beams = getStartBeams(tiles);
  return maxBy(
    beams.map((beam) => getEnergizedTileCount(beam, tiles)),
    (v) => v
  );
};
