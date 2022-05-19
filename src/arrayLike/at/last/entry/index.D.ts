import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";

export type ArrayLikeAtLastEntry = <X extends ArrayLike<any>>(x: X) => [ArrayLikeIndex<X>, ArrayLikeValue<X>] | void;
