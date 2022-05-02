export type ArrayLikeSumByCore = <Key extends keyof X, X extends Record<Key, number>>(key: Key, x: ArrayLike<X>) => number;
