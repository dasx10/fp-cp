import { Char } from "../../../../string/char/index.D";
import { Chars } from "../../../../string/chars/index.D";
import { ArrayValue } from "../../../index.D";
import { TupleFilterPredicate } from "../../filter/core/index.D";
import { ArrayLikeValue } from "../../index.D";
import { ArrayMap } from "../../map/core/index.D";
import { TupleRejectPredicate } from "../../reject/core/index.D";

export type TupleOrder <X extends readonly unknown[]> = 
[
	...TupleFilterPredicate<X, undefined>,
	...TupleFilterPredicate<TupleRejectPredicate<X, undefined>, null>,
	...TupleFilterPredicate<TupleRejectPredicate<X, null | undefined>, false>,
	...TupleFilterPredicate<TupleRejectPredicate<X, null | undefined | false>, true>,
	...TupleFilterPredicate<TupleRejectPredicate<X, null | undefined | boolean>, number>,
	...TupleFilterPredicate<TupleRejectPredicate<X, null | undefined | boolean | number>, bigint>,
	...TupleFilterPredicate<TupleRejectPredicate<X, null | undefined | boolean | number | bigint>, string>,
	...TupleFilterPredicate<TupleRejectPredicate<X, null | undefined | boolean | number | bigint | string>, symbol>,
	...TupleFilterPredicate<TupleRejectPredicate<X, null | undefined | boolean | number | bigint | string | symbol>, Function>,
	...TupleRejectPredicate<X, null | undefined | boolean | number | bigint | string | symbol | Function>
];

export type ArrayOrder <X extends readonly unknown[]> = X extends readonly []
	? []
	: X extends readonly [unknown, ...unknown[]]
		? TupleOrder<X>
		: ArrayValue<X>[]

export type ArrayLikeOrder <X extends ArrayLike<unknown>> = X extends readonly []
	? []
	: X extends readonly [unknown, ...unknown[]]
		? TupleOrder<X>
		: X extends string
			? ArrayMap<Char<X>, Chars<X>>
			: ArrayLikeValue<X>[];

export type ArrayLikeOrderCore<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => ArrayLikeOrder<X>;
