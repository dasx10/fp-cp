import type { placeholder }     from "../../index";
import type { ForEachIterate }  from "../forEach/index.D";
import type { ArrayIndex }      from "../index.D";
import type { FilterArray, FilterCore } from "./core/index.D";

export type FilterMapIterate <X extends readonly any[]> = ForEachIterate<X>;

export type FilterDef = FilterCore & {
  <Value, X extends readonly Value[]> (def: (value: Value, index: ArrayIndex<X>, array: X) => any): (array: X) => FilterArray<X>;
  <X extends readonly any[]>(_: placeholder, x: X): (def: FilterMapIterate<X>) => FilterArray<X>;
}
