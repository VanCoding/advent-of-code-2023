import { Position, Map, parseMap, findRoute } from "../part-1/exercise";

const positionId = ({ x, y }: Position) => `${x}/${y}`;

const getCrossings = (
  { x, y }: Position,
  routeTileIds: Set<string>,
  map: Map
): number => {
  let crossings = 0;
  for (let i = 0; i < x; i++) {
    if (
      routeTileIds.has(positionId({ y, x: i })) &&
      map[y][i].includes("UP") &&
      (map[y][i].length != 4 || map[y - 1][i].includes("DOWN"))
    ) {
      crossings++;
    }
  }
  return crossings;
};

const positionHasUnevenCrossings = (
  position: Position,
  routeTileIds: Set<string>,
  map: Map
) => getCrossings(position, routeTileIds, map) % 2 === 1;

export const solve = (input: string) => {
  const map = parseMap(input);
  const route = findRoute(map);
  const routeTileIds = new Set(route.map(positionId));
  let containedTileCount = 0;
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (
        !routeTileIds.has(positionId({ x, y })) &&
        positionHasUnevenCrossings({ x, y }, routeTileIds, map)
      ) {
        containedTileCount++;
      }
    }
  }
  return containedTileCount;
};
