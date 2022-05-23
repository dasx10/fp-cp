import type { ArrayLikeValue, ArrayLikeIndex } from './../../../../index.D';
export type ArrayLikeFindEntryRightCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => any, x: X) => [ArrayLikeIndex<X>, ArrayLikeValue<X>] | void;
