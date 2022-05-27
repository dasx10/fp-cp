export type ArrayLikeAtRandomIndexCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type> (x: X) => number | void;
