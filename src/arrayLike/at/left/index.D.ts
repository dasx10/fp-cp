import type { ArrayLikeAtLeft, ArrayLikeAtLeftCore } from './core/index.D';
import type { placeholder } from "../../../index";
import type { ToIndexLeft } from '../../index/index.D';

export type ArrayLikeAtLeftDef = ArrayLikeAtLeftCore & {
  <Index extends number>(index: ToIndexLeft<Index>): <X extends ArrayLike<any>>(x: X) => ArrayLikeAtLeft<X, Index>;
  <X extends ArrayLike<any>>(_: placeholder, x: X) : <Index extends number>(index: ToIndexLeft<Index>) => ArrayLikeAtLeft<X, Index>;
}
