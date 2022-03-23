import { Unboxing } from "../../index.D";
import { TupleReverse } from "../../reverse/index.D";
import { At } from "../index.D";

export type AtRight <Index extends number, X extends readonly any[]> = number extends Index 
  ? Unboxing<X>
  : `${Index}` extends `-${number}`
    ? At<Index, TupleReverse<X>>
    // @ts-ignore
    : At<`-${Index}`, X>;

export type AtRightDef = {
  <Index extends number, X extends readonly any[]>(index: Index, x: X): AtRight<Index, X>;
  <Index extends number>(index: Index): <X extends readonly any[]>(x: X) => AtRight<Index, X>;
}
