import { placeholder } from "../../../index";
import { ArrayIndex, ArrayValue } from "../../index.D";
import { ArrayAverageCore } from "../core/index.D";

export type ArrayAverageDef = ArrayAverageCore & {
  <Value>(def: (value: Value, index: number, array: Value[]) => number): <X extends readonly Value[]> (array: X) => number;
  <X extends readonly any[]>(_: placeholder, x: X): (def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: X) => number) => number;
};
