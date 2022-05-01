import type { Unboxing }         from './../../index.D';
import type { FilterMapIterate } from "../index.D";

export type FilterCore = <X extends readonly any[]>(def: FilterMapIterate<X>, array: X) => FilterArray<X>;

export type FilterTupleEver <X extends readonly any[]> = X extends readonly [any, ...infer Next]
	? [Unboxing<X>, ...FilterTupleEver<Next>]
	: [];

export type FilterTuple <X extends readonly any[]> = X extends readonly [any, ...infer Next]
	? [] | [Unboxing<X>] | [Unboxing<X>, ...FilterTupleEver<Next>]
	: [];

export type FilterArrayEver <X extends readonly [any, ...any[]]> = X extends readonly [any, ...infer Next]
  ? [Unboxing<X>] | [Unboxing<X>, ...FilterTupleEver<Next>]
  : X;

export type FilterArray <X extends readonly any[]> = X extends readonly [any, ...infer Next]
	? [] | [Unboxing<X>] | [Unboxing<X>, ...FilterTupleEver<Next>]
	: [] | X;
