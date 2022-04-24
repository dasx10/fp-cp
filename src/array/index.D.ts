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

export type ArrayConsistentEvery <Array extends readonly any[]> = Array extends readonly [infer First, ...infer Next] ?      [First] | [First, ...TupleConsistentEvery<Next>] : Array;
export type ArrayConsistent      <Array extends readonly any[]> = Array extends readonly [infer First, ...infer Next] ? [] | [First] | [First, ...TupleConsistentEvery<Next>] : Array;

export type UnTypeTuple          <Type, Tuple extends readonly any[]> = Tuple extends readonly [any, ...infer Next] ? [Type, ...UnTypeTuple<Type, Next>] : [];
export type UnTypeArray          <Type, Array extends readonly any[]> = Array extends readonly [any, ...infer Next] ? [Type, ...UnTypeTuple<Type, Next>] : Type[];


export type TupleDifference<
	Tuple      extends readonly any[],
	Difference extends readonly any[],
> = Difference extends readonly [infer DifferenceFirst, ...infer DifferenceNext]
  ? Tuple extends readonly [infer First, ...infer Next]
    ? First extends DifferenceFirst ? TupleDifference<Next, DifferenceNext>
      : DifferenceNext
    : Difference
  : [];
