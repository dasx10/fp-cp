import type { __ }                          from '../../../../../index';
import type { ToIndexInvert }               from './../../../index.D';
import type { ArrayLikeIndexHasInvertCore } from './../core/index.D';

export type ArrayLikeIndexHasInvertDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeIndexHasInvertCore<Type> & {
	<Index extends number>(index: ToIndexInvert<Index>): () => boolean;
	<X extends Type>(_:__, x: X): <Index extends number>(x: X) => boolean;
}
