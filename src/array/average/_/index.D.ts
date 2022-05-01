import type { ArrayIndex, ArrayValue } from "../../index.D";
export type AverageCore = <X extends readonly any[]>(def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: X) => number, array: X) => number;
