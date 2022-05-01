import type { ArrayLikeIterator } from "../../index.D";
export type ArrayLikeFindCore = <X>(def: ArrayLikeIterator<X>, x: ArrayLike<X>) => X | undefined;
