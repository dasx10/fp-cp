import type { ToIndexLeft } from "../../../arrayLike/index/index.D";
import type { placeholder } from "../../../index";
import type { CheckIndex, Index as GetIndex, Unboxing }    from "../../index.D";

export type AtLeft <Index extends number, X extends readonly any[]> = number extends Index 
? Unboxing<X> | undefined
: X extends readonly [...any]
  ? `${Index}` extends keyof X 
    ? X[Index]
    : X[Index] | undefined
  : X[Index] | undefined;

export type AtLeftDef = {
  <Index extends GetIndex<X>, X extends readonly any[]>(index: ToIndexLeft<Index>, x: X): AtLeft<Index, X>;
  <Index extends number>(index: ToIndexLeft<Index>): <X extends readonly any[]>(x: X) => AtLeft<Index, X>;
  <X extends readonly any[]>(_: placeholder, x: X): <Index extends GetIndex<X>>(index: ToIndexLeft<Index>) => AtLeft<Index, X>;
}
