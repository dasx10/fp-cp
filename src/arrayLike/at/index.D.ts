// interfaces
import type { ArrayLikeAt, ArrayLikeAtCore } from './core/index.D';
import type { ArrayLikeHeadCore }            from './head/index.D';
import type { ArrayLikeTailCore }            from './tail/index.D';
import type { ArrayLikeAtRandomCore }        from './random/index.D';
import type { ArrayLikeAtLeftDef }           from './left/index.D';
import type { ArrayLikeAtRightDef }          from './right/index.D';
import type { ToIndex }                      from '../index/index.D';
import type { placeholder }                  from '../../index';

export type ArrayLikeAtDef = ArrayLikeAtCore & {
	<Index extends number>(index: ToIndex<Index>): <X extends ArrayLike<any>>(x: X) => ArrayLikeAt<X, Index>;
	<X extends ArrayLike<any>>(_: placeholder, x: X): <Index extends number>(index: ToIndex<Index>) => ArrayLikeAt<X, Index>;
};

export type ArrayLikeAtLib = ArrayLikeAtDef & {
	core   : ArrayLikeAtCore,
	head   : ArrayLikeHeadCore,
	tail   : ArrayLikeTailCore,
	random : ArrayLikeAtRandomCore,
	left   : ArrayLikeAtLeftDef,
	right  : ArrayLikeAtRightDef,
}
