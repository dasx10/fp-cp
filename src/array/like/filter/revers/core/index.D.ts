import type { Chars }                          from './../../../../../string/chars/index.D';
import type { ArrayValue }                     from '../../../../index.D';
import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";

// Filter


export type TupleFilterReversEver <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	?      [Value] | [...TupleFilterReversEver<Next>, Value] | TupleFilterReversEver<Next>
	: never;
	
	export type TupleFilterReverse     <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	? [] | [Value] | [...TupleFilterReversEver<Next>, Value] | TupleFilterReversEver<Next>
	: [];

export type ArrayFilterReversEver <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	? [Value] | [...TupleFilterReversEver<Next>, Value] | TupleFilterReversEver<Next>
	: X;

export type ArrayFilterRevers     <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	? [] | [Value] | [...TupleFilterReversEver<Next>, Value] | TupleFilterReversEver<Next>
	: [] | X;

export type ArrayLikeFilterReverse <X extends ArrayLike<unknown>> = X extends readonly [infer Value, ...infer Next]
	? [] | [Value] | [...TupleFilterReversEver<Next>, Value] | TupleFilterReversEver<Next>
	: X extends string
		? ArrayFilterRevers<Chars<X>>
		: [] | ArrayLikeValue<X>[];

// Predicate

export type TupleFilterReversPredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : Predicate & ArrayValue<X> extends never ? []
		: X extends readonly [infer Value, ...infer Next]
			? Value extends Predicate
				? [...TupleFilterReversPredicate<Next, Predicate & ArrayValue<Next>>, Value & Predicate]
				: Predicate & Value extends never
					? TupleFilterReversPredicate<Next, Predicate & ArrayValue<Next>>
					: Predicate & Value extends Value
						? [...TupleFilterReversPredicate<Next, Predicate & ArrayValue<Next>>, Predicate & Value] | TupleFilterReversPredicate<Next, Predicate & ArrayValue<Next>>
						: TupleFilterReversPredicate<Next, Predicate & ArrayValue<Next>>
	: never;

export type ArrayFilterReversPredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : Predicate & ArrayValue<X> extends never ? []
	: X extends readonly [infer Value, ...infer Next]
		? Value extends Predicate
			? [...TupleFilterReversPredicate<Next, Predicate & ArrayValue<Next>>, Value & Predicate]
			: Predicate & Value extends never
				? TupleFilterReversPredicate<Next, Predicate & ArrayValue<Next>>
				: Predicate & Value extends Value
					? [...TupleFilterReversPredicate<Next, Predicate & ArrayValue<Next>>, Predicate & Value] | TupleFilterReversPredicate<Next, Predicate & ArrayValue<Next>>
					: TupleFilterReversPredicate<Next, Predicate & ArrayValue<Next>>
			: (Predicate & ArrayLikeValue<X>)[]

export type ArrayLikeFilterReversPredicate <X extends ArrayLike<unknown>, Predicate> = 
	X extends readonly [] ? [] : Predicate & ArrayLikeValue<X> extends never ? []
	: X extends readonly [infer Value, ...infer Next]
		? Value extends Predicate
			? [...TupleFilterReversPredicate<Next, Predicate & ArrayValue<Next>>, Value & Predicate]
			: Predicate & Value extends never
				? TupleFilterReversPredicate<Next, Predicate & ArrayValue<Next>>
				: Predicate & Value extends Value
					? [...TupleFilterReversPredicate<Next, Predicate & ArrayValue<Next>>, Predicate & Value] | TupleFilterReversPredicate<Next, Predicate & ArrayValue<Next>>
					: TupleFilterReversPredicate<Next, Predicate & ArrayValue<Next>>
				: X extends string
					? ArrayFilterReversPredicate<Chars<X>, Predicate>
					: (Predicate & ArrayLikeValue<X>)[];


// Core

export type ArrayLikeFilterReversCore <
	Type extends ArrayLike<unknown> = ArrayLike<unknown>
> = {
	<X extends Type, Predicate>
	  // @ts-ignore 
		(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => value is Predicate, x: X) : ArrayLikeFilterReversPredicate<X, Predicate & ArrayLikeValue<X>>;

	<X extends Type>                              
		(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => unknown, x: X)    : ArrayLikeFilterReverse<X>;
}
