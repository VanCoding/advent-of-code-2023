import { filter, map, pipe, sumBy } from "remeda";

type FoundNumber = {
  value: number;
  line: number;
  start: number;
  end: number;
};

type FoundSymbol = {
  line: number;
  index: number;
};

const isDigit = (character: string) => character.match(/\d/);
const isSymbol = (character: string) =>
  !isDigit(character) && character !== ".";

export const findNumbersInLine = (
  line: string,
  lineNumber: number
): FoundNumber[] => {
  const result: FoundNumber[] = [];
  let numberStart: number | null = null;
  for (let index = 0; index <= line.length; index++) {
    const digit = isDigit(line[index] ?? "");
    if (digit && numberStart === null) {
      numberStart = index;
    } else if (!digit && numberStart !== null) {
      result.push({
        value: +line.substring(numberStart, index),
        line: lineNumber,
        start: numberStart,
        end: index - 1,
      });
      numberStart = null;
    }
  }
  return result;
};

export const findSymbolsInLine = (
  line: string,
  lineNumber: number
): FoundSymbol[] =>
  line
    .split("")
    .flatMap((character, index) =>
      isSymbol(character) ? [{ line: lineNumber, index }] : []
    );

export const numberBordersSymbol = (
  number: FoundNumber,
  symbol: FoundSymbol
) => {
  return (
    symbol.line >= number.line - 1 &&
    symbol.line <= number.line + 1 &&
    symbol.index >= number.start - 1 &&
    symbol.index <= number.end + 1
  );
};

export const getNumbersBorderingSymbol = (input: string): number[] => {
  const lines = input.split("\n");
  const symbols = lines.flatMap(findSymbolsInLine);
  const numbers = lines.flatMap(findNumbersInLine);
  return pipe(
    numbers,
    filter((number) =>
      symbols.some((symbol) => numberBordersSymbol(number, symbol))
    ),
    map((number) => number.value)
  );
};

export const solve = (input: string): number => {
  const borderingNumbers = getNumbersBorderingSymbol(input);
  return sumBy(borderingNumbers, (v) => v);
};
