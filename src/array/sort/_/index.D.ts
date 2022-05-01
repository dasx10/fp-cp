import { ArrayValue, UnTypeArray } from "../../index.D";

export type Sort <X extends readonly any[]> = X extends readonly [] ? [] : UnTypeArray<ArrayValue<X>, X>;
export type SortCore = <X extends readonly any[]>(def: (a: ArrayValue<X>, b: ArrayValue<X>) => any, x : X) => Sort<X>;
