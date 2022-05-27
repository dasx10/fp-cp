import type { __ }                                       from "../../../../../index";
import type { ToIndexDirect }                            from "../../../index/index.D";
import type { ArrayLikeAtDirect, ArrayLikeAtDirectCore } from "../core/index.D";

export type ArrayLikeAtDirectDef <Type extends Record<number, unknown> = Record<number, unknown>> = ArrayLikeAtDirectCore<Type> & {
  <
		WaitType extends Type                    = Type,
		Index    extends keyof WaitType & number = keyof WaitType & number
	>(index: ToIndexDirect<Index>): <X extends WaitType>(x: X) => ArrayLikeAtDirect<X, Index>;

  <X extends Type>(_:__, x: X) : <Index extends keyof X & number>(index: ToIndexDirect<Index>) => ArrayLikeAtDirect<Type, Index>;
}
