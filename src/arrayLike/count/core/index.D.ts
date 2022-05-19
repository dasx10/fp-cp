import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";
export type ArrayLikeCountCore = <X extends ArrayLike<any>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => any, x: X) => number;
