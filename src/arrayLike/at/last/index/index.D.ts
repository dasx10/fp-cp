export type ArrayLikeAtLastIndex <X extends ArrayLike<unknown>> = number | void;
export type ArrayLikeAtLastIndexCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => ArrayLikeAtLastIndex<X>;
