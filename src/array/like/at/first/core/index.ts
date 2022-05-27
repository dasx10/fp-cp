import type { ArrayLikeAtFirst, ArrayLikeAtFirstCore } from "./index.D";

const arrayLikeAtFirstCore: ArrayLikeAtFirstCore = <X extends ArrayLike<unknown>>(x: X): ArrayLikeAtFirst<X> => x[0];
export default arrayLikeAtFirstCore;
