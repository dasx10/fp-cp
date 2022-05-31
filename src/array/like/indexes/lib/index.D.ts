import { ArrayLikeFilterIndexesMain } from './../../filter/indexes/index.D';
export interface ArrayLikeIndexesLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly filter : ArrayLikeFilterIndexesMain<Type>;
}
