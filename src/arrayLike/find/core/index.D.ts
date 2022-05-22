import type { ArrayLikeIndex } from './../../index.D';
import type { ArrayLikeValue } from "../../index.D";

export type ArrayLikeFindCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => any, x: X) => X | undefined;
