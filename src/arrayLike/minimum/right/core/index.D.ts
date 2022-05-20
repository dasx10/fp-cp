import type { ArrayLikeValue } from "../../../index.D";

export type ArrayLikeMinimumRightCore = <X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>, index: number, x: X) => number, x: X) => number;
