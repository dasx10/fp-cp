import type { placeholder }     from "../../index";
import type { ForEachIterate }  from "../forEach/index.D";
import type { ArrayConsistent, Index, Unboxing, UnTypeArray } from "../index.D";

export type FilterMapIterate <X extends readonly any[]> = ForEachIterate<X>;

type FilterTupleEver <X extends readonly any[]> = X extends readonly [any, ...infer Next]
	? [Unboxing<X>, ...FilterTupleEver<Next>]
	: [];

type FilterTuple <X extends readonly any[]> = X extends readonly [any, ...infer Next]
	? [] | [Unboxing<X>] | [Unboxing<X>, ...FilterTupleEver<Next>]
	: [];

type FilterArrayEver <X extends readonly [any, ...any[]]> = X extends readonly [any, ...infer Next]
? [Unboxing<X>] | [Unboxing<X>, ...FilterTupleEver<Next>]
: X;

type FilterArray <X extends readonly any[]> = X extends readonly [any, ...infer Next]
	? [] | [Unboxing<X>] | [Unboxing<X>, ...FilterTupleEver<Next>]
	: [] | X;


export type FilterDef = {
  <X extends readonly any[]> (def: FilterMapIterate<X>, array: X): FilterArray<X>;
  <Value, X extends readonly Value[]> (def: (value: Value, index: Index<X>, array: X) => any): (array: X) => FilterArray<X>;
  <X extends readonly any[]>(_: placeholder, x: X): (def: FilterMapIterate<X>) => FilterArray<X>;
}
