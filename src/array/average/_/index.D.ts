import type { Index, Unboxing } from "../../index.D";
export type AverageCore = <X extends readonly any[]>(def: (value: Unboxing<X>, index: Index<X>, array: X) => number, array: X) => number;
