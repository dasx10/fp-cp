import type { ArrayLikeCountIncludesCore } from '../core/index.D';

export interface ArrayLikeCountIncludesLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeCountIncludesCore<Type>
}
