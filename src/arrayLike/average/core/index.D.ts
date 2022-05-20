import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";
export type ArrayLikeAverageCore = <X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => number, x: X) => number;
