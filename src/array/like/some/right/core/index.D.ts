import type { ArrayLikeExecutor } from "../../../index.D";
export type ArrayLikeSomeRightCore<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(def: ArrayLikeExecutor<X>, x: X) => boolean;
