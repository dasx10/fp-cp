import type { __ }                                     from '../../../../../index';
import type { ToIndex }                                from '../../../index/index.D';
import type { ArrayLikeAtRight, ArrayLikeAtRightCore } from '../core/index.D';
import type { ArrayLikeValue }                         from '../../../index.D';

export type ArrayLikeAtRightDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeAtRightCore<Type> & {
	<WaitType extends ArrayLikeValue<Type> = ArrayLikeValue<Type>, Index extends number = number>(index: ToIndex<Index>): <X extends WaitType[]>(x: X) => ArrayLikeAtRight<X, Index>;
	<X extends Type>(_: __, x: X): <Index extends number>(index: ToIndex<Index>) => ArrayLikeAtRight<X, Index>;
}
