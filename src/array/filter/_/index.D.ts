import type { ArrayValue }         from './../../index.D';
import type { FilterMapIterate } from "../index.D";

export type FilterCore = <X extends readonly any[]>(def: FilterMapIterate<X>, array: X) => FilterArray<X>;

type FilterTupleEver <X extends readonly any[]> = X extends readonly [any, ...infer Next]
	? [ArrayValue<X>, ...FilterTupleEver<Next>]
	: [];

export type FilterTuple <X extends readonly any[]> = X extends readonly [any, ...infer Next]
	? [] | [ArrayValue<X>] | [ArrayValue<X>, ...FilterTupleEver<Next>]
	: [];

export type FilterArray <X extends readonly any[]> = X extends readonly [any, ...infer Next]
	? [] | [ArrayValue<X>] | [ArrayValue<X>, ...FilterTupleEver<Next>]
	: [] | X;
