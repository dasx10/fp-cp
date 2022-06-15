import type { ArrayValue }     from './../../../../../../backup/array/index.D';
import type { ArrayLikeValue } from "../../../index.D";
import type { Chars }          from '../../../../../string/chars/index.D';

export type TupleFilterOf <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : Predicate & ArrayValue<X> extends never ? []
		: X extends readonly [infer Value, ...infer Next]
			? Value extends Predicate
				? [Value & Predicate, ...TupleFilterOf<Next, Predicate & ArrayValue<Next>>] | TupleFilterOf<Next, Predicate & ArrayValue<Next>>
				: Predicate & Value extends never
					? TupleFilterOf<Next, Predicate & ArrayValue<Next>>
					: Predicate & Value extends Value
						? [Predicate & Value, ...TupleFilterOf<Next, Predicate & ArrayValue<Next>>] | TupleFilterOf<Next, Predicate & ArrayValue<Next>>
						: TupleFilterOf<Next, Predicate & ArrayValue<Next>>
	: never;

export type ArrayFilterOf <X extends readonly unknown[], Predicate> =
	X extends readonly []
		? []
		: X extends readonly [unknown, ...unknown[]]
			? TupleFilterOf<X, Predicate>
			: (Predicate & ArrayValue<X>)[]

export type ArrayLikeFilterOf <Predicate, X extends ArrayLike<unknown>> = 
	X extends readonly (infer Type)[]
		? (Predicate & Type) extends never 
			? []
			: Predicate extends Type 
				? ArrayFilterOf<X, Predicate & Type>
				: Type extends Predicate
					? ArrayFilterOf<X, Predicate & Type>
					: X extends string
			? ArrayFilterOf<Chars<X>, Predicate>
			: (Predicate & ArrayLikeValue<X>)[]
		: (Predicate & ArrayLikeValue<X>)[]
