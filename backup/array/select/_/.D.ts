import type { ArrayAt } from '../../at/core/index.D';
import type { ArrayValue } from './../../index.D';

type _Select<Indexes extends readonly number[], X extends readonly any[]> = Indexes extends readonly [infer Index, ...infer NextIndexes]
  ? Index extends number 
    ? NextIndexes extends number[] ? [X[Index], ..._Select<NextIndexes, X>] : [X[Index]]
    : []
  : [];

type UnMap <Tuple extends readonly any[], T> = Tuple extends readonly [any, ...infer NextValues]
? [T, ...UnMap<NextValues, T>] 
: [];

export type Select <Indexes extends readonly number[], X extends readonly any[]> = Indexes extends readonly [infer Index, ...infer NextIndexes] 
  // @ts-ignore
	? [ArrayAt<Index, X>, ...Select<NextIndexes, X>]
	: Indexes extends readonly [] ? [] : ArrayValue<X>[];
