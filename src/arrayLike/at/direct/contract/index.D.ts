import { placeholder } from "../../../../index";
import { ToIndexDirect } from "../../../index/index.D";
import { ArrayLikeAtDirect, ArrayLikeAtDirectCore } from "../core/index.D";

export type ArrayLikeAtDirectDef = ArrayLikeAtDirectCore & {
  <Index extends number>(index: ToIndexDirect<Index>): <X extends ArrayLike<any>>(x: X) => ArrayLikeAtDirect<X, Index>;
  <X extends ArrayLike<any>>(_: placeholder, x: X) : <Index extends number>(index: ToIndexDirect<Index>) => ArrayLikeAtDirect<X, Index>;
}
