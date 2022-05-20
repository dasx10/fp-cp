import type { ArrayLikeAt } from "../../core/index.D";

export type ArrayLikeAtFirst <X extends ArrayLike<unknown>> = ArrayLikeAt<X, 0>;
export type ArrayLikeAtFirstCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => ArrayLikeAtFirst<X>;
