import type { ArrayLikeAtResult } from "../core/index.D";

export type ArrayLikeTail <X extends ArrayLike<any>> = ArrayLikeAtResult<X>;
export type ArrayLikeTailCore = <X extends ArrayLike<any>>(x: X) => ArrayLikeTail<X>;
