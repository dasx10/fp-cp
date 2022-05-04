import type { ArrayLikeValue } from "../../index.D";

export type ArrayLikeAtRandom <X extends ArrayLike<any>> = ArrayLikeValue<X> | undefined;
export type ArrayLikeAtRandomCore = <X extends ArrayLike<any>>(x: X) => ArrayLikeAtRandom<X>;
