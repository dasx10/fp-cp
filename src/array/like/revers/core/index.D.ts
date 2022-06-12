import type { Chars }          from "../../../../string/chars/index.D";
import type { ArrayLikeValue } from "../../index.D";

export type TupleRevers<
  Tuple     extends readonly unknown[],
  Recursive extends readonly unknown[] = []
> = Tuple extends readonly [infer F, ...infer L]
  ? TupleRevers<L, [F, ...Recursive]>
  : Recursive;

export type ArrayRevers<X extends readonly unknown[]> = X extends readonly [infer F, ...infer L]
  ? TupleRevers<L, [F]>
  : X;

export type ArrayLikeRevers <X extends ArrayLike<unknown>> = X extends readonly [infer F, ...infer L]
	? TupleRevers<L, [F]>
	: X extends readonly []
		? []
		: X extends string
			? ArrayRevers<Chars<X>>
			: ArrayLikeValue<X>[];


export type ArrayLikeReversCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => ArrayLikeRevers<X>; 
