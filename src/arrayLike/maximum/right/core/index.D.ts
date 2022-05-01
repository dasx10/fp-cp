import type { ArrayLikeIterator, ArrayLikeValue } from "../../../index.D";

export type ArrayLikeMaximumRightCore = <X extends ArrayLike<any>>(def: ArrayLikeIterator<ArrayLikeValue<X>, number>, x: X) => number;
