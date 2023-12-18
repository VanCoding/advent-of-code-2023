type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Directions = Direction[];
type Map = Array<Array<Direction[]>>;

const characterToDirections: Record<string, Directions> = {
  S: ["UP", "DOWN", "LEFT", "RIGHT"],
  "-": ["LEFT", "RIGHT"],
  "|": ["UP", "DOWN"],
  L: ["UP", "RIGHT"],
  J: ["UP", "LEFT"],
  F: ["DOWN", "RIGHT"],
  "7": ["DOWN", "LEFT"],
};

type Position = {
  x: number;
  y: number;
};

const getPositionInDirection = ({ x, y }: Position, direction: Direction) => {
  switch (direction) {
    case "UP":
      return { x, y: y - 1 };
    case "DOWN":
      return { x, y: y + 1 };
    case "LEFT":
      return { x: x - 1, y };
    case "RIGHT":
      return { x: x + 1, y };
  }
};

const parseMap = (input: string): Map =>
  input
    .split("\n")
    .map((line) =>
      line.split("").map((character) => characterToDirections[character] ?? [])
    );

const getConnectedPositions = (position: Position, map: Map): Position[] => {
  const connections = map[position.y][position.x];
  return connections.flatMap((direction) => {
    let next = getPositionInDirection(position, direction);
    if (
      next.x < 0 ||
      next.x >= map[0].length ||
      next.y < 0 ||
      next.y >= map.length
    ) {
      return [];
    }
    let nextDirections = map[next.y][next.x];

    if (
      (direction === "UP" && nextDirections.includes("DOWN")) ||
      (direction === "DOWN" && nextDirections.includes("UP")) ||
      (direction === "LEFT" && nextDirections.includes("RIGHT")) ||
      (direction === "RIGHT" && nextDirections.includes("LEFT"))
    ) {
      return [next];
    }
    return [];
  });
};

const getNextConnection = (a: Position, b: Position, map: Map): Position => {
  const connectedPositions = getConnectedPositions(b, map);
  return connectedPositions.filter((p) => p.x !== a.x || p.y !== a.y)[0];
};

const findStartPosition = (map: Map): Position => {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x].length === 4) return { x, y };
    }
  }
  throw new Error("could not find start position");
};

const findRoute = (map: Map): Position[] => {
  const start = findStartPosition(map);
  const [next] = getConnectedPositions(start, map);
  const route: Position[] = [start, next];
  while (
    route[0].x !== route[route.length - 1].x ||
    route[0].y !== route[route.length - 1].y
  ) {
    route.push(
      getNextConnection(route[route.length - 2], route[route.length - 1], map)
    );
  }
  return route;
};

export const solve = (input: string) => {
  const map = parseMap(input);
  const route = findRoute(map);
  return (route.length - 1) / 2;
};
