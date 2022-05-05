import type { ToIndexDirect } from "../../../index/index.D";
import type { ArrayLikeAtDirect, ArrayLikeAtDirectCore } from "./index.D";

const arrayLikeAtDirectCore: ArrayLikeAtDirectCore = <Index extends number, X extends ArrayLike<any>>(index: ToIndexDirect<Index>, x: X): ArrayLikeAtDirect<X, Index> => x[index];
export default arrayLikeAtDirectCore;
