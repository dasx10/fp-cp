import type { ArrayLikeExecutor } from "../../index.D";
export type ArrayLikeEveryCore<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(def: ArrayLikeExecutor<X>, x: X) => boolean;
