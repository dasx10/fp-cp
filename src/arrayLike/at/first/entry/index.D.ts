export type ArrayLikeAtFirstEntryCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => [0, X[0]] | void;
