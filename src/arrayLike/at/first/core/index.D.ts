import type { ArrayLikeAt } from "../../core/index.D";

export type ArrayLikeAtFirst <X extends ArrayLike<any>> = ArrayLikeAt<X, 0>;
export type ArrayLikeAtFirstCore = <X extends ArrayLike<any>>(x: X) => ArrayLikeAtFirst<X>;
