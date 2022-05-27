import type { ArrayLikeGroupCore } from './../core/index.D';

export interface ArrayLikeGroupLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeGroupCore<Type>;
}
