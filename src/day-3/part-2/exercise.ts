import { filter, map, pipe, sumBy } from "remeda";
import {
  findNumbersInLine,
  findSymbolsInLine,
  numberBordersSymbol,
} from "../part-1/exercise";

export const getGearedNumbers = (input: string): number[][] => {
  const lines = input.split("\n");
  const symbols = lines.flatMap((line, index) =>
    findSymbolsInLine(line, index, (c) => c === "*")
  );
  const numbers = lines.flatMap(findNumbersInLine);
  return pipe(
    symbols,
    map((symbol) =>
      pipe(
        numbers,
        filter((number) => numberBordersSymbol(number, symbol)),
        map((n) => n.value)
      )
    ),
    filter((v) => v.length > 1)
  );
};

export const getGearRatios = (input: string): number[] =>
  getGearedNumbers(input).map(([a, b]) => a * b);

export const solve = (input: string): number =>
  sumBy(getGearRatios(input), (v) => v);
