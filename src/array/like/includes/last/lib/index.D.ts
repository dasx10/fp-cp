import type { ArrayLikeIncludesLastCore } from './../core/index.D';

export interface ArrayLikeIncludesLastLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>>{
	readonly core: ArrayLikeIncludesLastCore<Type>
}
