import type { ArrayLikeValue } from "../../../index.D";

export type ArrayLikeAtRandom <X extends ArrayLike<unknown>> = ArrayLikeValue<X> | undefined;
export type ArrayLikeAtRandomCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => ArrayLikeAtRandom<X>;
