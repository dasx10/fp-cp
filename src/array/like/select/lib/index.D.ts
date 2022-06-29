import type { ArrayLikeSelectCore } from './../core/index.D';
export interface ArrayLikeSelectLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeSelectCore<Type>;
}
