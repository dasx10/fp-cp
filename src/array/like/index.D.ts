import type { Chars } from './../../string/chars/index.D';
import type { ArrayValue, ArrayIndex, TupleIndex } from '../index.D';
import type { ToIndexInvert }          from './index/index.D';


export type ArrayLikeIterator <X, Return = unknown> = (value: X, index: ToIndexInvert<number>, arrayLike: ArrayLike<X>) => Return;

export type ArrayLikeEachDef<Result, X = unknown, Return = unknown> = <IX extends X>(def: ArrayLikeIterator<IX, Return>, x: ArrayLike<X>) => Result;

export type ArrayLikeEachCurryDef<Result, Return = unknown> = {
	<X>(def: ArrayLikeIterator<X, Return>, x: ArrayLike<X>): Result;
  <X>(def: ArrayLikeIterator<X, Return>): (x: ArrayLike<X>) => Result;
}


export type DirectiveValue <X extends Record<number, unknown>> = X extends Record<number, infer T> ? T : never;
export type ArrayLikeValue <X extends ArrayLike<unknown>>      = X extends string 
	? ArrayValue<Chars<X>>
	: X extends ArrayLike<infer T> ? T : never;

export type ArrayLikeIndex <X extends Record<number, unknown>> = X extends readonly [unknown, ...infer Next] 
	? Next['length'] | TupleIndex<Next>
	: X extends string 
		? ArrayIndex<Chars<X>>
		: X extends readonly [] 
			? never 
			: number & keyof X;

export type ArrayLikeExecutor <ArrayLikeType extends ArrayLike<unknown>, Return = unknown> = (value: ArrayLikeValue<ArrayLikeType>, index: ArrayLikeIndex<ArrayLikeType>, x: ArrayLikeType) => Return;
