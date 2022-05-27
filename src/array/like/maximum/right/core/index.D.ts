import type { ArrayLikeIterator, ArrayLikeValue } from "../../../index.D";

export type ArrayLikeMaximumRightCore = <X extends ArrayLike<unknown>>(def: ArrayLikeIterator<ArrayLikeValue<X>, number>, x: X) => number;
