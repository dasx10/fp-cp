import type { placeholder } from "../../index";
import type { ArrayIndex, ArrayValue } from "../index.D";
import type { AverageCore } from "./_/index.D";

export type AverageDef = AverageCore & {
  <Value>(def: (value: Value, index: number, array: Value[]) => number): <X extends readonly Value[]> (array: X) => number;
  <X extends readonly any[]>(_: placeholder, x: X): (def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: X) => number) => number;
};
