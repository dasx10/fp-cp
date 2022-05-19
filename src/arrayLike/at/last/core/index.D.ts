import type { ArrayLikeAtResult } from "../../core/index.D";

export type ArrayLikeAtLast <X extends ArrayLike<any>> = ArrayLikeAtResult<X>;
export type ArrayLikeAtLastCore = <X extends ArrayLike<any>>(x: X) => ArrayLikeAtLast<X>;
