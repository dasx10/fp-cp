import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
export type ArrayLikeAtRandomEntryCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => [ArrayLikeIndex<X>, ArrayLikeValue<X>] | void;
