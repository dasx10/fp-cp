
export type ArrayIterateFunction<X = any, R = any> = (element: X, index: number, array: readonly X[]) => R;

export type TupleConsistentEvery<T extends readonly any[]> = T extends readonly [infer X, ...infer N] ? [X] | [X, ...TupleConsistentEvery<N>] : [];
export type TupleConsistent<T extends readonly any[]> = TupleConsistentEvery<T> | [];
export type TupleDifference<
  T extends readonly any[],
  D extends readonly any[],
> = D extends readonly [infer DX, ...infer DN]
  ? T extends readonly [infer X, ...infer N]
    ? X extends DX ? TupleDifference<N, DN> : DN
  : D
: [];

// export type LastElement<Tuple extends any[]>   = FirstElement<Reverse<Tuple>>;

export type ArrayType<T extends readonly any[]> = T extends readonly (infer X)[] ? X : never;
