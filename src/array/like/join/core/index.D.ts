import type { AcceptString }   from "../../../../string/index.D";

export type ArrayLikeJoinSeparatorResult <
	SEPARATOR extends AcceptString = ''
> = '' | string | `${string}${SEPARATOR}${string}`;

export type ArrayLikeJoin <
	X         extends ArrayLike<unknown>,
	SEPARATOR extends AcceptString = ''
> = ArrayLikeJoinSeparatorResult;

export type ArrayLikeJoinCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <
	SEPARATOR extends AcceptString,
	X         extends Type
>(separator: SEPARATOR, array: X) => ArrayLikeJoin<X, SEPARATOR>;
