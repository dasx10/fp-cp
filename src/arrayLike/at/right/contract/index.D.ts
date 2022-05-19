import type { placeholder } from '../../../../index';
import type { ToIndex } from '../../../index/index.D';
import type { ArrayLikeAtRight, ArrayLikeAtRightCore } from './../core/index.D';

export type ArrayLikeAtRightDef = ArrayLikeAtRightCore & {
	<Index extends number>(index: ToIndex<Index>): <X extends ArrayLike<any>>(x: X) => ArrayLikeAtRight<X, Index>;
	<X extends ArrayLike<any>>(_: placeholder, x: X): <Index extends number>(index: ToIndex<Index>) => ArrayLikeAtRight<X, Index>;
}
