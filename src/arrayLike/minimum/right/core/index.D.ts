import type { ArrayLikeValue } from "../../../index.D";

export type ArrayLikeMinimumRightCore = <X extends ArrayLike<any>>(def: (value: ArrayLikeValue<X>, index: number, x: X) => number, x: X) => number;
