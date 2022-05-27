import type { ArrayLikeIndexHasDirectCore } from './../core/index.D';

export interface ArrayLikeIndexHasDirectLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeIndexHasDirectCore<Type>;
}
