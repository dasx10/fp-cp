export type Unboxing <X extends readonly any[]> = X extends readonly (infer T)[] ? T : never;

type _Index<X extends readonly any[]> = X extends readonly [any, ...infer X]
  ? X extends readonly [any, ...infer X1]
    ? X1 extends readonly [any, ...infer X2]
      ? X2 extends readonly [any, ...infer X3]
        ? (X['length'] | X1['length'] | X2['length'] | X3['length'] | _Index<X2>)
        : (0 | 1 | 2 | 3)
      : (0 | 1 | 2)
    : (0 | 1)
  : 0;

export type Index <X extends readonly any[]> = X extends readonly [any, ...infer X] ? _Index<X> : number;

export type TupleConsistentEvery <Tuple extends readonly any[]> = Tuple extends readonly [infer First, ...infer Next] ?      [First] | [First, ...TupleConsistentEvery<Next>] : [];
export type TupleConsistent      <Tuple extends readonly any[]> = Tuple extends readonly [infer First, ...infer Next] ? [] | [First] | [First, ...TupleConsistentEvery<Next>] : [];
