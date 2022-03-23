import { ForEachIterate } from "../forEach/index.D";
import { Index, Unboxing } from "../index.D";
export type FilterMapIterate <X extends readonly any[]> = ForEachIterate<X>;
export type FilterDef = {
  <X extends readonly any[]> (def: FilterMapIterate<X>, array: X): Unboxing<X>[];
  <Value, X extends readonly Value[]> (def: (value: Value, index: Index<X>, array: X) => any): (array: X) => Value[];
}
