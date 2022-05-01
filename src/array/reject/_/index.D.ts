import type { ArrayIndex, ArrayValue } from "../../index.D";
export type RejectCore = <X extends readonly any[]>(def: (value: ArrayValue<X>, Index: ArrayIndex<X>, array: X) => any, array: X) => ArrayValue<X>[]
