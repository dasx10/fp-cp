import { ArrayValue } from '../../../../index.D';
import type { Chars } from './../../../../../../backup/_string/chars/index.D';
import type { ArrayLikeIndex, ArrayLikeValue } from "./../../../index.D";

// Filter


export type TupleFilterReverseEver <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	?      [Value] | [...TupleFilterReverseEver<Next>, Value] | TupleFilterReverseEver<Next>
	: never;
	
	export type TupleFilterReverse     <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	? [] | [Value] | [...TupleFilterReverseEver<Next>, Value] | TupleFilterReverseEver<Next>
	: [];

export type ArrayFilterReverseEver <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	? [Value] | [...TupleFilterReverseEver<Next>, Value] | TupleFilterReverseEver<Next>
	: X;

export type ArrayFilterReverse     <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	? [] | [Value] | [...TupleFilterReverseEver<Next>, Value] | TupleFilterReverseEver<Next>
	: [] | X;

export type ArrayLikeFilterReverse <X extends ArrayLike<unknown>> = X extends readonly [infer Value, ...infer Next]
	? [] | [Value] | [...TupleFilterReverseEver<Next>, Value] | TupleFilterReverseEver<Next>
	: X extends string
		? ArrayFilterReverse<Chars<X>>
		: [] | ArrayLikeValue<X>[];

// Predicate

export type TupleFilterReversePredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : Predicate & ArrayValue<X> extends never ? []
		: X extends readonly [infer Value, ...infer Next]
			? Value extends Predicate
				? [...TupleFilterReversePredicate<Next, Predicate & ArrayValue<Next>>, Value & Predicate]
				: Predicate & Value extends never
					? TupleFilterReversePredicate<Next, Predicate & ArrayValue<Next>>
					: Predicate & Value extends Value
						? [...TupleFilterReversePredicate<Next, Predicate & ArrayValue<Next>>, Predicate & Value] | TupleFilterReversePredicate<Next, Predicate & ArrayValue<Next>>
						: TupleFilterReversePredicate<Next, Predicate & ArrayValue<Next>>
	: never;

export type ArrayFilterReversePredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : Predicate & ArrayValue<X> extends never ? []
	: X extends readonly [infer Value, ...infer Next]
		? Value extends Predicate
			? [...TupleFilterReversePredicate<Next, Predicate & ArrayValue<Next>>, Value & Predicate]
			: Predicate & Value extends never
				? TupleFilterReversePredicate<Next, Predicate & ArrayValue<Next>>
				: Predicate & Value extends Value
					? [...TupleFilterReversePredicate<Next, Predicate & ArrayValue<Next>>, Predicate & Value] | TupleFilterReversePredicate<Next, Predicate & ArrayValue<Next>>
					: TupleFilterReversePredicate<Next, Predicate & ArrayValue<Next>>
			: (Predicate & ArrayLikeValue<X>)[]

export type ArrayLikeFilterReversePredicate <X extends ArrayLike<unknown>, Predicate> = 
	X extends readonly [] ? [] : Predicate & ArrayLikeValue<X> extends never ? []
	: X extends readonly [infer Value, ...infer Next]
		? Value extends Predicate
			? [...TupleFilterReversePredicate<Next, Predicate & ArrayValue<Next>>, Value & Predicate]
			: Predicate & Value extends never
				? TupleFilterReversePredicate<Next, Predicate & ArrayValue<Next>>
				: Predicate & Value extends Value
					? [...TupleFilterReversePredicate<Next, Predicate & ArrayValue<Next>>, Predicate & Value] | TupleFilterReversePredicate<Next, Predicate & ArrayValue<Next>>
					: TupleFilterReversePredicate<Next, Predicate & ArrayValue<Next>>
				: X extends string
					? ArrayFilterReversePredicate<Chars<X>, Predicate>
					: (Predicate & ArrayLikeValue<X>)[];


// Core

export type ArrayLikeFilterReverseCore <
	Type extends ArrayLike<unknown> = ArrayLike<unknown>
> = {
	<X extends Type, Predicate>
	  // @ts-ignore 
		(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => value is Predicate, x: X) : ArrayLikeFilterReversePredicate<X, Predicate & ArrayLikeValue<X>>;

	<X extends Type>                              
		(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => unknown, x: X)    : ArrayLikeFilterReverse<X>;
}
