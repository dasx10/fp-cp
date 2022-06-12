import type { ToIndexDirect } from "../../src/array/like/index/index.D";

export type ArrayValue <X extends readonly any[]> = X extends readonly (infer T)[] ? T : never;

export type TupleIndex<X extends readonly any[]> = X extends readonly [any, ...infer X0]
  ? X0 extends readonly [any, ...infer X1]
    ? X1 extends readonly [any, ...infer X2]
      ? X2 extends readonly [any, ...infer X3]
        ? (X0['length'] | X1['length'] | X2['length'] | X3['length'] | TupleIndex<X3>)
        : (0 | 1 | 2)
      : (0 | 1)
    : (0)
  : never;

export type ArrayIndex <X extends readonly any[]> = X extends readonly [any, ...infer Next] 
	? Next['length'] | TupleIndex<Next> 
	: X extends readonly [] ? never : number;


export type IndexFilter <I extends ArrayIndex<X>, X extends readonly any[]> = ArrayIndex<X> & ToIndexDirect<I>;

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


export type BreakArrayRight <Tuple extends readonly any[], Break extends readonly any[]> = Break['length'] extends 0
	? Tuple
	: Tuple extends readonly [any, ...infer Next]
		? Break extends readonly [any, ...infer NextBreak] ? BreakArrayRight<Next, NextBreak> : Next
		: [];
