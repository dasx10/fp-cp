export type ArrayLikeAtFirstEntryCore = <X extends ArrayLike<any>>(x: X) => [0, X[0]] | void;
