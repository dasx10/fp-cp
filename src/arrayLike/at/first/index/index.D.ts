export type ArrayLikeAtFirstIndexCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => 0 | void;
