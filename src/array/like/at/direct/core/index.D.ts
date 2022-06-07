import type { Chars }             from './../../../../../string/chars/index.D';
import type { ToIndexDirect }     from "../../../index/index.D";
import type { DirectiveAtResult } from "../../core/index.D";
import type { ArrayLikeAtResult } from '../../core/index.D';

type AtResult <X extends Record<number, unknown>> = X extends ArrayLike<unknown>
	? ArrayLikeAtResult<X>
	: X extends Record<number, unknown>
		? DirectiveAtResult<X>
		: never;

export type TupleAtDirect <Index extends number, X extends readonly any[]> = number extends Index 
	? ArrayLikeAtResult<X>
	: X[Index];
	
export type ArrayAtDirect <Index extends number, X extends readonly any[]> = X extends readonly [...infer Values]
	? TupleAtDirect<Index, Values>
	: ArrayLikeAtResult<X>;

export type ArrayLikeAtDirect <X extends Record<number, unknown>, Index extends number> = number extends Index
	? AtResult<X>
	: `${Index}` extends `-${number}`
		? undefined
		: X extends readonly unknown[]
			? ArrayAtDirect<Index, X>
			: X extends readonly []
				? undefined
				: X extends string
					? ArrayAtDirect<Index, Chars<X>>
					: AtResult<X>;
	
export type ArrayLikeAtDirectCore <Type extends Record<number, unknown> = Record<number, unknown>> = <Index extends keyof X & number, X extends Type>(index: ToIndexDirect<Index>, x: X) => ArrayLikeAtDirect<X, Index>;
