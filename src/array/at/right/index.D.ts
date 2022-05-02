import type { ToIndexRight } from "../../../arrayLike/index/index.D";
import type { placeholder } from "../../../index";
import type { TupleReverse } from "../../reverse/index.D";
import type { ArrayAtResult } from "../core/index.D";

export type TupleAtRight<Index extends number, X extends readonly any[]> = `${Index}` extends `-${infer Invert}`
	// @ts-ignore
	? [undefined, ...TupleReverse<X>][Invert]
	: undefined;

export type ArrayAtRight <Index extends number, X extends readonly any[]> = X extends readonly [...infer Values]
	? TupleAtRight<Index, Values>
	: ArrayAtResult<X>;

export type AtRightDef = {
  <Index extends number, X extends readonly any[]>(index: ToIndexRight<Index>, x: X): ArrayAtRight<Index, X>;
  <Index extends number>(index: ToIndexRight<Index>): <X extends readonly any[]>(x: X) => ArrayAtRight<Index, X>;
  <X extends readonly any[]>(_: placeholder, x: X): <Index extends number>(index: ToIndexRight<Index>) => ArrayAtRight<Index, X>;
}
