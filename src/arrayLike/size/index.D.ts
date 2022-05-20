import type { Chars } from "../../string/chars/index.D"

export type ArrayLikeSize <X extends ArrayLike<unknown>> = 
	X extends string
		? Chars<X>['length']
		: X['length'];

export type ArrayLikeSizeCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => ArrayLikeSize<X>;
