import type { ToIndexLeft } from "../../../index/index.D";
import type { ArrayLikeAtLeft, ArrayLikeAtLeftCore } from "./index.D";

const arrayLikeAtLeftCore: ArrayLikeAtLeftCore = <Index extends number, X extends ArrayLike<any>>(index: ToIndexLeft<Index>, x: X): ArrayLikeAtLeft<X, Index> => x[index];
export default arrayLikeAtLeftCore;
