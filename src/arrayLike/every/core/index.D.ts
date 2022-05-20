import type { ArrayLikeExecutor } from "../../index.D";
export type ArrayLikeEveryCore = <X extends ArrayLike<unknown>>(def: ArrayLikeExecutor<X>, x: X) => boolean;
