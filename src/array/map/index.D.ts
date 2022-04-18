import type { placeholder } from "../../index";
import type { Index, Unboxing } from "../index.D";

export type ArrayMapDef = {
  <Value, Return>(def: (value: Value, index: number, array: Value[]) => Return): <X extends Value[]>(x: X) => Return[];
  <Def extends (value: Unboxing<X>, index: Index<X>, array: X) => any, X extends readonly any[]> (def: Def, x: X): ReturnType<Def>[];
  <X extends readonly any[]>(_: placeholder, x: X): <Def extends (value: Unboxing<X>, index: Index<X>, array: X) => any>(def: Def) => ReturnType<Def>[]
}
