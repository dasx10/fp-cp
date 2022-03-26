import { Unboxing } from './../../index.D';

type _Select<Indexes extends readonly number[], X extends readonly any[]> = Indexes extends readonly [infer Index, ...infer NextIndexes]
  ? Index extends number 
    ? NextIndexes extends number[] ? [X[Index], ..._Select<NextIndexes, X>] : [X[Index]]
    : []
  : [];

type UnMap <Tuple extends readonly any[], T> = Tuple extends readonly [any, ...infer NextValues]
? [T, ...UnMap<NextValues, T>]
: [];


export type Select <Indexes extends readonly number[], X extends readonly any[]> = Indexes extends readonly [infer Index, ...infer NextIndexes] 
  ? X extends readonly [any, ...any[]] 
    ? Index extends number
      // @ts-ignore
      ? [X[Index], ..._Select<NextIndexes, X>]
      : [Unboxing<X>, ...UnMap<NextIndexes, Unboxing<X>>]
      // @ts-ignore
    : [(X[Unboxing<Indexes>] | undefined), ...UnMap<NextIndexes, (X[Unboxing<Indexes>] | undefined)>]
  : (X[Unboxing<Indexes>] | undefined)[];
