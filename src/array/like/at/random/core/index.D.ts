import type { ArrayValue }     from './../../../../../../backup/array/index.D';
import type { ArrayLikeValue } from "../../../index.D";
import type { Chars }          from '../../../../../string/chars/index.D';

export type ArrayLikeAtRandomResult <X extends ArrayLike<unknown>> = ArrayLikeValue<X> | void;
export type ArrayLikeAtRandom <X extends ArrayLike<unknown>> = X extends readonly [unknown, ...unknown[]]
	? ArrayValue<X>
	: X extends string
		? ArrayLikeAtRandom<Chars<X>>
		: X extends readonly []
			? void
			: ArrayLikeAtRandomResult<X>;


export type ArrayLikeAtRandomCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => ArrayLikeAtRandom<X>;
