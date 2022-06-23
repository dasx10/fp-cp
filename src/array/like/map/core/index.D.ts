import type { Chars } from "../../../../string/chars/index.D";
import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";

export type TupleMap <Type, X extends readonly unknown[]> = X extends readonly [unknown, ...infer Next]
	? [Type, ...TupleMap<Type, Next>]
	: [];

export type ArrayMap <Type, X extends readonly unknown[]> = X extends readonly [unknown, ...infer Next] 
	? [Type, ...TupleMap<Type, Next>]
	: X extends readonly [] 
		? []
		: Type[];

export type CharsMap <Type, X extends string> = ArrayMap<Type, Chars<X>>;

export type ArrayLikeMap <Type, X extends ArrayLike<unknown>> = X extends readonly [unknown, ...infer Next] 
? [Type, ...TupleMap<Type, Next>]
: X extends readonly [] 
	? []
	: X extends string
		? CharsMap<Type, X>
		: Type[];


export type ArrayLikeMapCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type, Result>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => Result,
	x   : X
) => ArrayLikeMap<Result, X>;
