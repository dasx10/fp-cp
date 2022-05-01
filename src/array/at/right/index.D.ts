import type { ToIndexRight } from "../../../arrayLike/index/index.D";
import type { placeholder } from "../../../index";
import type { ArrayValue } from "../../index.D";
import type { ArrayReverse } from "../../reverse/index.D";
import type { At } from "../index.D";

export type AtRight <Index extends number, X extends readonly any[]> = number extends Index 
? ArrayValue<X> | undefined
: X extends readonly [...any]
  ? `${Index}` extends `-${infer Invert}`
    ? Invert extends keyof X
      // @ts-ignore
      ? [undefined, ...ArrayReverse<X>][Invert]
      // @ts-ignore
      : [undefined, ...ArrayReverse<X>][Invert] | undefined
    : ArrayValue<X> | undefined
  : ArrayValue<X> | undefined;

export type AtRightDef = {
  <Index extends number, X extends readonly any[]>(index: ToIndexRight<Index>, x: X): AtRight<Index, X>;
  <Index extends number>(index: ToIndexRight<Index>): <X extends readonly any[]>(x: X) => AtRight<Index, X>;
  <X extends readonly any[]>(_: placeholder, x: X): <Index extends number>(index: ToIndexRight<Index>) => AtRight<Index, X>;
}
