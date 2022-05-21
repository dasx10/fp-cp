import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";
export type ArrayLikeAverageCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => number, x: X) => number;
