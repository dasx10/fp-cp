import type { Chars } from './../../string/chars/index.D';

export type TupleKeys     <X extends readonly unknown[]> = X extends readonly [unknown, ...infer Next] 
	? [...TupleKeys<Next>, `${Next['length']}`]
	: [];

export type ArrayKeys     <X extends readonly unknown[]> = X extends readonly [unknown, ...infer Next]
	? [...TupleKeys<Next>, `${Next['length']}`]
	: `${number}`[] | [];

export type StringKeys    <X extends string>             = ArrayKeys<Chars<X>>

export type ArrayLikeKeys <X extends ArrayLike<unknown>> = X extends readonly [unknown, ...infer Next]
	? [...TupleKeys<Next>, `${Next['length']}`]
	: X extends string 
		? StringKeys<X>
		: (`${keyof X & number}`)[] | [];

export type ArrayLikeKeysCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => ArrayLikeKeys<X>;
