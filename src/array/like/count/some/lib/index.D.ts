import type { ArrayLikeCountSomeCore } from '../core/index.D';

export interface ArrayLikeCountSomeLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeCountSomeCore<Type>
}
