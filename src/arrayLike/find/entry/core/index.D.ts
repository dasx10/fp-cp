import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
export type ArrayLikeFindEntryCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => any, x: X) => [ArrayLikeIndex<X>, ArrayLikeValue<X>] | void;
