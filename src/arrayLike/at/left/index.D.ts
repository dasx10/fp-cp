import type { ToIndexLeft } from './../../index.D';
import type { AtLeft } from './_/index.D';
import type { placeholder } from "../../../index";

export type AtLeftDef = {
  <Index extends number, X extends ArrayLike<any>>(index: ToIndexLeft<Index>, x: X): AtLeft<Index, X>;
  <Index extends number>(index: ToIndexLeft<Index>): <X extends ArrayLike<any>>(x: X) => AtLeft<Index, X>;
  <X extends ArrayLike<any>>(_: placeholder, x: X) : <Index extends number>(index: ToIndexLeft<Index>) => AtLeft<Index, X>;
}
