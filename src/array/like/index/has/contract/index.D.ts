import type { __ }                    from '../../../../index';
import type { ToIndex }               from '../../index.D';
import type { ArrayLikeIndexHasCore } from './../core/index.D';

export type ArrayLikeIndexHasDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>>  = ArrayLikeIndexHasCore<Type> & {
	<Index extends number>(index: ToIndex<Index>): <X extends Type>(x: X) => boolean;
	<X extends Type>(_:__, x: X): <Index extends number>(index: ToIndex<Index>) => boolean;
}
