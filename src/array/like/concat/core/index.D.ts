import type { Chars } from "../../../../string/chars/index.D"
import type { ArrayLikeValue } from "../../index.D"

export type ArrayLikeConcat <Y extends ArrayLike<unknown>, X extends ArrayLike<unknown>> = Y extends readonly [...infer YValues]
	? X extends readonly [...infer XValues]
		? [...XValues, ...YValues]
		: X extends string
			? [...Chars<X>, ...YValues]
			: [...ArrayLikeValue<X>[], ...YValues]
	: Y extends string 
		? ArrayLikeConcat<Chars<Y>, X>
		: X extends readonly [...infer XValues]
			?	[...XValues, ...ArrayLikeValue<Y>[]]
			: X extends string
				?	[...Chars<X>, ...ArrayLikeValue<Y>[]]
				: ArrayLikeValue<X> | ArrayLikeValue<Y>[]

export type ArrayLikeConcatCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <Y extends Type, X extends Type>(y: Y, x: X) => ArrayLikeConcat<Y, X>;
