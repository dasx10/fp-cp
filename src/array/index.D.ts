
export type ArrayValue <X extends readonly unknown[]> = X extends readonly (infer T)[] ? T : never;

export type TupleIndex<X extends readonly unknown[]> = X extends readonly [unknown, ...infer X0]
  ? X0 extends readonly [unknown, ...infer X1]
    ? X1 extends readonly [unknown, ...infer X2]
      ? X2 extends readonly [unknown, ...infer X3]
        ? (X0['length'] | X1['length'] | X2['length'] | X3['length'] | TupleIndex<X3>)
        : (0 | 1 | 2)
      : (0 | 1)
    : (0)
  : never;

export type ArrayIndex <X extends readonly unknown[]> = X extends readonly [unknown, ...infer Next] 
	? Next['length'] | TupleIndex<Next> 
	: X extends readonly [] 
		? never
		: number & keyof X;


export type TupleConsistentEvery <Tuple extends readonly unknown[]> = Tuple extends readonly [infer First, ...infer Next] ?      [First] | [First, ...TupleConsistentEvery<Next>] : [];
export type TupleConsistent      <Tuple extends readonly unknown[]> = Tuple extends readonly [infer First, ...infer Next] ? [] | [First] | [First, ...TupleConsistentEvery<Next>] : [];

export type ArrayConsistentEvery <Array extends readonly unknown[]> = Array extends readonly [infer First, ...infer Next] ?      [First] | [First, ...TupleConsistentEvery<Next>] : Array;
export type ArrayConsistent      <Array extends readonly unknown[]> = Array extends readonly [infer First, ...infer Next] ? [] | [First] | [First, ...TupleConsistentEvery<Next>] : Array;

export type UnTypeTuple          <Type, Tuple extends readonly unknown[]> = Tuple extends readonly [unknown, ...infer Next] ? [Type, ...UnTypeTuple<Type, Next>] : [];
export type UnTypeArray          <Type, Array extends readonly unknown[]> = Array extends readonly [unknown, ...infer Next] ? [Type, ...UnTypeTuple<Type, Next>] : Type[];

export type TupleDifference<
	Tuple      extends readonly unknown[],
	Difference extends readonly unknown[],
> = Difference extends readonly [infer DifferenceFirst, ...infer DifferenceNext]
  ? Tuple extends readonly [infer First, ...infer Next]
    ? First extends DifferenceFirst ? TupleDifference<Next, DifferenceNext>
      : DifferenceNext
    : Difference
  : [];


export type BreakArrayRight <Tuple extends readonly unknown[], Break extends readonly unknown[]> = Break['length'] extends 0
	? Tuple
	: Tuple extends readonly [unknown, ...infer Next]
		? Break extends readonly [unknown, ...infer NextBreak] ? BreakArrayRight<Next, NextBreak> : Next
		: [];
