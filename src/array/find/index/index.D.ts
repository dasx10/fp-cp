import type { placeholder } from "../../../index";
import type { Index, Unboxing } from "../../index.D";

type FindIndexCore = <X extends readonly any[]>(def: (value: Unboxing<X>, index: Index<X>, array: X) => any, X: X) => number;

export type FindIndexDef = FindIndexCore & {
  <Value>(def: (value: Value, index: number, array: Value[]) => any): <X extends readonly Value[]>(x: X) => number;
  <X extends readonly any[]>(_: placeholder, X: X): (def: (value: Unboxing<X>, index: Index<X>, array: X) => any) => number;
}

export type FindIndexLib = FindIndexDef & {
  core : FindIndexCore,
  right: FindIndexDef,
}
