import type { ArrayLikeExecutor } from "../../../index.D";
export type ArrayLikeEveryRightCore = <X extends ArrayLike<unknown>>(def: ArrayLikeExecutor<X>, x: X) => boolean;
