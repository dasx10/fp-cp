import { Unboxing, UnTypeArray } from "../../index.D";

export type Sort <X extends readonly any[]> = X extends readonly [] ? [] : UnTypeArray<Unboxing<X>, X>;
export type SortCore = <X extends readonly any[]>(def: (a: Unboxing<X>, b: Unboxing<X>) => any, x : X) => Sort<X>;
