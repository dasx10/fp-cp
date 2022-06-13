import type { ArrayLikeValue } from '../../../index.D';
import type { ArrayLikeCount } from './../../core/index.D';

export type ArrayLikeCountSome <
	FindValues extends readonly unknown[],
	X extends ArrayLike<unknown>
> = ArrayLikeCount<X>;

export type ArrayLikeCountSomeCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <
	FindValues extends readonly [ArrayLikeValue<X>, ArrayLikeValue<X>, ...ArrayLikeValue<X>[]],
	X extends Type
> (findValues: FindValues, x: X) => ArrayLikeCountSome<FindValues, X>;
