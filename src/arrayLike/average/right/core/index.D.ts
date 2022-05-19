import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";

export type ArrayLikeAverageRightCore = <X extends ArrayLike<any>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => number, x: X) => number;
