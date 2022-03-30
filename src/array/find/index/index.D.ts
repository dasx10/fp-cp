import type { placeholder } from "../../../index";
import type { Index, Unboxing } from "../../index.D";

type FindIndexCore = <X extends readonly any[]>(def: (value: Unboxing<X>, index: Index<X>, array: X) => any, X: X) => -1 | Index<X>;

export type FindIndexDef = FindIndexCore & {
  <Value>(def: (value: Value, index: number, array: Value[]) => any): <X extends readonly Value[]>(x: X) => -1 | Index<X>;
  <X extends readonly any[]>(_: placeholder, X: X): (def: (value: Unboxing<X>, index: Index<X>, array: X) => any) => -1 | Index<X>;
}

export type FindIndexLib = FindIndexDef & {
  core : FindIndexCore,
  right: FindIndexDef,
}
