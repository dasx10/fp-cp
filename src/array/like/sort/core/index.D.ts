import { Chars }          from "../../../../string/chars/index.D";
import { ArrayValue }     from "../../../index.D";
import { ArrayLikeValue } from "../../index.D";
import { TupleMap }       from "../../map/core/index.D";

export type ArrayLikeSort <X extends ArrayLike<unknown>> = X extends readonly []
	? []
	: X extends readonly [unknown, ...unknown[]]
		? TupleMap<ArrayValue<X>, X>
		: X extends string
			? ArrayLikeSort<Chars<X>>
			: ArrayLikeValue<X>[]
