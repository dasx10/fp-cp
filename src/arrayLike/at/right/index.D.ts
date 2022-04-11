import type { placeholder } from "../../../index";
import type { ToIndexRight } from "../../index/index.D";
import type { AtRight } from "./_/index.D";

export type AtRightDef = {
  <Index extends number, X extends ArrayLike<any>>(index: ToIndexRight<Index>, x: X): AtRight<Index, X>;
  <Index extends number>(index: ToIndexRight<Index>): <X extends ArrayLike<any>>(x: X) => AtRight<Index, X>;
  <X extends ArrayLike<any>>(_: placeholder, x: X): <Index extends number>(index: ToIndexRight<Index>) => AtRight<Index, X>;
}
