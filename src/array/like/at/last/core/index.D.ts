import { Chars } from "../../../../../string/chars/index.D";
import type { ArrayLikeAtResult } from "../../core/index.D";

export type ArrayLikeAtLast <X extends ArrayLike<unknown>> = X extends readonly [...unknown[], infer Value]
	? Value
	: X extends string
		? ArrayLikeAtLast<Chars<X>>
		: ArrayLikeAtResult<X>;

export type ArrayLikeAtLastCore<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => ArrayLikeAtLast<X>;
