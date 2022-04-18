import type { Index, Unboxing } from "../../index.D";
export type RejectCore = <X extends readonly any[]>(def: (value: Unboxing<X>, Index: Index<X>, array: X) => any, array: X) => Unboxing<X>[]
