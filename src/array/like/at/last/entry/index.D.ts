import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";

export type ArrayLikeAtLastEntry<X extends ArrayLike<unknown>> = [ArrayLikeIndex<X>, ArrayLikeValue<X>] | void;
export type ArrayLikeAtLastEntryCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => ArrayLikeAtLastEntry<X>;
