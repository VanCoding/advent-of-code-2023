import {
  filter,
  flatMap,
  map,
  pipe,
  sort,
  sortBy,
  sumBy,
  toPairs,
} from "remeda";
import { hash } from "../part-1/exercise";

export type Boxes = Record<number, Lens[]>;

type Lens = { label: string; focalLength: number };

type Operation =
  | {
      type: "ADD";
      box: number;
      label: string;
      focalLength: number;
    }
  | {
      type: "REMOVE";
      box: number;
      label: string;
    };

export const parseOperations = (input: string): Operation[] =>
  input.split(",").map((op): Operation => {
    if (op.endsWith("-")) {
      const label = op.slice(0, op.length - 1);
      return { type: "REMOVE", box: hash(label), label };
    } else {
      const [label, focalLength] = op.split("=");
      return {
        type: "ADD",
        box: hash(label),
        label,
        focalLength: +focalLength,
      };
    }
  });

const processOperation = (boxes: Boxes, operation: Operation) => {
  let box = boxes[operation.box];
  if (!box) {
    boxes[operation.box] = box = [];
  }
  const existingIndex = box.findIndex((lens) => lens.label === operation.label);
  if (operation.type === "ADD") {
    if (existingIndex >= 0) {
      box[existingIndex].focalLength = operation.focalLength;
    } else {
      box.push({ label: operation.label, focalLength: operation.focalLength });
    }
  } else if (existingIndex >= 0) {
    box.splice(existingIndex, 1);
  }
};

export const prepareBoxes = (operations: Operation[]) => {
  let boxes: Boxes = {};
  for (const operation of operations) {
    processOperation(boxes, operation);
  }
  return boxes;
};

export const getFocusingPowers = (boxes: Boxes): number[] =>
  pipe(
    boxes,
    toPairs,
    map(([boxId, lenses]) => ({ id: +boxId, lenses })),
    filter((box) => box.lenses.length > 0),
    sortBy([(box) => box.id, "asc"] as const),
    flatMap((box) =>
      box.lenses.map(
        (lens, lensIndex) => (box.id + 1) * (lensIndex + 1) * lens.focalLength
      )
    )
  );

export const solve = (input: string) =>
  pipe(
    input,
    parseOperations,
    prepareBoxes,
    getFocusingPowers,
    sumBy((v) => v)
  );
