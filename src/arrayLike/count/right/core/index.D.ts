import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
export type ArrayLikeCountRightCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => any, x: X) => number;
