import type { __ } from '../../../../../../index';
import type { ArrayLikeIndex }              from '../../../../index.D';
import type { ToIndexDirect }               from './../../../index.D';
import type { ArrayLikeIndexHasDirectCore } from './../core/index.D';

export type ArrayLikeIndexHasDirectDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeIndexHasDirectCore<Type> & {
	<Index extends number>(index: ToIndexDirect<Index>): <X extends Type>(x: X) => boolean;
	<X extends Type>(_:__, x: X): <Index extends ArrayLikeIndex<X>>(index: ToIndexDirect<Index>) => boolean;
}
