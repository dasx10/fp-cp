import type { placeholder }     from "../../index";
import type { ForEachIterate }  from "../forEach/index.D";
import type { Index, Unboxing } from "../index.D";

export type FilterMapIterate <X extends readonly any[]> = ForEachIterate<X>;

export type FilterDef = {
  <X extends readonly any[]> (def: FilterMapIterate<X>, array: X): Unboxing<X>[];
  <Value, X extends readonly Value[]> (def: (value: Value, index: Index<X>, array: X) => any): (array: X) => Value[];
  <X extends readonly any[]>(_: placeholder, x: X): (def: FilterMapIterate<X>) => Unboxing<X>[];
}
