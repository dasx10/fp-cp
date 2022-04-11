import type { ToIndexRight } from "../../../arrayLike/index/index.D";
import type { placeholder } from "../../../index";
import type { Unboxing } from "../../index.D";
import type { TupleReverse } from "../../reverse/index.D";
import type { At } from "../index.D";

export type AtRight <Index extends number, X extends readonly any[]> = number extends Index 
? Unboxing<X> | undefined
: X extends readonly [...any]
  ? `${Index}` extends `-${infer Invert}`
    ? Invert extends keyof X
      // @ts-ignore
      ? [undefined, ...TupleReverse<X>][Invert]
      // @ts-ignore
      : [undefined, ...TupleReverse<X>][Invert] | undefined
    : Unboxing<X> | undefined
  : Unboxing<X> | undefined;

export type AtRightDef = {
  <Index extends number, X extends readonly any[]>(index: ToIndexRight<Index>, x: X): AtRight<Index, X>;
  <Index extends number>(index: ToIndexRight<Index>): <X extends readonly any[]>(x: X) => AtRight<Index, X>;
  <X extends readonly any[]>(_: placeholder, x: X): <Index extends number>(index: ToIndexRight<Index>) => AtRight<Index, X>;
}
