import type { __ }                from "../../../../../index";
import type { ArrayLikeIndex } from "../../../../index.D";
import type { ToIndexDirect }              from "../../../../index/index.D";
import type { ArrayLikeAtDirectIndexCore } from "../core/index.D";

export type ArrayLikeAtDirectIndexDef <Type extends Record<number, unknown> = Record<number, unknown>> = ArrayLikeAtDirectIndexCore<Type> & {
	<WaitType extends Type = Type, Index extends ArrayLikeIndex<WaitType> = ArrayLikeIndex<WaitType>>(index: ToIndexDirect<Index>): <X extends WaitType>(x: X) => Index | void;
	<X extends Type>(_: __, x: X): <Index extends number>(index: ToIndexDirect<Index>) => Index | void;
}
