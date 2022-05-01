import type { ArrayLikeIterator } from "../../index.D"

export type ArrayLikeGroupCore = <X, Key extends PropertyKey>(def: ArrayLikeIterator<X, Key>, x: ArrayLike<X>) => Record<Key, X>;
