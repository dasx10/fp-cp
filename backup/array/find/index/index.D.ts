import type { placeholder } from "../../../index";
import type { ArrayIndex, ArrayValue } from "../../index.D";

type FindIndexCore = <X extends readonly any[]>(def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: X) => any, X: X) => -1 | ArrayIndex<X>;

export type FindIndexDef = FindIndexCore & {
  <Value>(def: (value: Value, index: number, array: Value[]) => any): <X extends readonly Value[]>(x: X) => -1 | ArrayIndex<X>;
  <X extends readonly any[]>(_: placeholder, X: X): (def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: X) => any) => -1 | ArrayIndex<X>;
}

export type FindIndexLib = FindIndexDef & {
  core : FindIndexCore,
  right: FindIndexDef,
}
