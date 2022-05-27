import type { ArrayLikeIterator, ArrayLikeValue } from "../../index.D";
export type ArrayLikeMaximumCore = <X extends ArrayLike<unknown>>(def: ArrayLikeIterator<ArrayLikeValue<X>, number>, x: X) => number;
