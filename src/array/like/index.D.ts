import type { Chars }                  from './../../string/chars/index.D';
import type { ArrayIndex, TupleIndex } from '../index.D';
import type { ToIndexInvert }          from './index/index.D';
import type { Char }                   from '../../string/char/index.D';

export type ArrayLikeIterator <X, Return = unknown> = (value: X, index: ToIndexInvert<number>, arrayLike: ArrayLike<X>) => Return;

export type DirectiveValue <X extends Record<number, unknown>> = X extends Record<number, infer T> 
	? T
	: never;

export type ArrayLikeValue <X extends ArrayLike<unknown>>      = X extends readonly [] 
	? never
	: X extends string 
	? Char<X>
	: X extends ArrayLike<infer T> ? T : never;

export type ArrayLikeIndex <X extends Record<number, unknown>> = X extends readonly [unknown, ...infer Next] 
	? Next['length'] | TupleIndex<Next>
	: X extends string 
		? ArrayIndex<Chars<X>>
		: X extends readonly [] 
			? never 
			: number & keyof X;

export type ArrayLikeExecutor <ArrayLikeType extends ArrayLike<unknown>, Return = unknown> = (value: ArrayLikeValue<ArrayLikeType>, index: ArrayLikeIndex<ArrayLikeType>, x: ArrayLikeType) => Return;
