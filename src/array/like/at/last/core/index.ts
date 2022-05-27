import type { ArrayLikeAtLast, ArrayLikeAtLastCore } from "./index.D";

const arrayLikeAtLastCore: ArrayLikeAtLastCore = <X extends ArrayLike<unknown>>(x: X): ArrayLikeAtLast<X> => x[x.length - 1];
export default arrayLikeAtLastCore;
