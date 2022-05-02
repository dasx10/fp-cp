import type { ArrayLikeIterator } from "../../index.D";

export type ArrayLikeSomeCore = <X>(def: ArrayLikeIterator<X>, x: ArrayLike<X>) => boolean;
