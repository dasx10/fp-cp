import type { placeholder }     from "../../index";
import type { ArrayIndex, ArrayValue } from "../index.D";
import type { RejectCore }      from "./_/index.D";

export type RejectDef = RejectCore & {
  <Value>(def: (value: Value, index: number, array: Value[]) => any): <X extends readonly Value[]>(array: X) => Value[];
  <X extends readonly any[]>(_: placeholder, array: X): (def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: X) => any) => ArrayValue<X>[]
}
