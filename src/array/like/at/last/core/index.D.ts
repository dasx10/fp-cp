import type { ArrayLikeAtResult } from "../../core/index.D";

export type ArrayLikeAtLast <X extends ArrayLike<unknown>> = ArrayLikeAtResult<X>;
export type ArrayLikeAtLastCore<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => ArrayLikeAtLast<X>;
