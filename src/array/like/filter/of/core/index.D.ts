import type { ArrayValue }     from './../../../../../../backup/array/index.D';
import type { ArrayLikeValue } from "../../../index.D";
import type { Chars }          from '../../../../../string/chars/index.D';

export type TupleFilterOf <X extends readonly unknown[], Predicate> =
X extends readonly [] ? []
	: X extends readonly [infer Value, ...infer Next]
		? Value extends Predicate
			? Predicate extends Value
				? [Value & Predicate, ...TupleFilterOf<Next, Predicate>]
				: [Value & Predicate, ...TupleFilterOf<Next, Predicate>] | TupleFilterOf<Next, Exclude<Predicate, Value>>
			: Predicate extends Value
				? [Value & Predicate, ...TupleFilterOf<Next, Predicate>] | TupleFilterOf<Next, Exclude<Predicate, Value>>
				: TupleFilterOf<Next, Exclude<Predicate, Value>>
: never

export type ArrayFilterOf <X extends readonly unknown[], Predicate> =
X extends readonly [] ? []
	: X extends readonly [infer Value, ...infer Next]
	? Value extends Predicate
	? Predicate extends Value
		? [Value & Predicate, ...TupleFilterOf<Next, Predicate>]
		: [Value & Predicate, ...TupleFilterOf<Next, Predicate>] | TupleFilterOf<Next, Exclude<Predicate, Value>>
	: Predicate extends Value
		? [Value & Predicate, ...TupleFilterOf<Next, Predicate>] | TupleFilterOf<Next, Exclude<Predicate, Value>>
		: TupleFilterOf<Next, Predicate>
	: X extends readonly (infer Value)[]
		? Value extends Predicate
			? (Predicate & ArrayValue<X>)[]
			: Predicate extends Value
				? (Predicate & ArrayValue<X>)[]
				: []
			: [];

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


export type ArrayLikeFilterOfCore <
	Type      extends ArrayLike<unknown>   = ArrayLike<unknown>,
	FindValue extends ArrayLikeValue<Type> = ArrayLikeValue<Type>
> = <
	Value extends ArrayLikeValue<X> & FindValue,
	X     extends Type = Type
>(value: Value, x: X) => ArrayLikeFilterOf<Value, X>
