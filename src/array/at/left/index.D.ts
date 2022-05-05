import type { ToIndexDirect } from "../../../arrayLike/index/index.D";
import type { placeholder } from "../../../index";
import type { ArrayIndex as GetIndex, ArrayValue }    from "../../index.D";
import { ArrayAtResult } from "../core/index.D";

export type TupleAtLeft <Index extends number, X extends readonly any[]> = number extends Index 
	? ArrayAtResult<X>
	: X[Index];

export type ArrayAtLeft <Index extends number, X extends readonly any[]> = X extends readonly [...infer Values]
	? TupleAtLeft<Index, Values>
	: ArrayAtResult<X>;

export type AtLeftDef = {
  <Index extends GetIndex<X>, X extends readonly any[]>(index: ToIndexDirect<Index>, x: X): ArrayAtLeft<Index, X>;
  <Index extends number>(index: ToIndexDirect<Index>): <X extends readonly any[]>(x: X) => ArrayAtLeft<Index, X>;
  <X extends readonly any[]>(_: placeholder, x: X): <Index extends GetIndex<X>>(index: ToIndexDirect<Index>) => ArrayAtLeft<Index, X>;
}
