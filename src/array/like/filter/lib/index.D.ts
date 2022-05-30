import type { ArrayFilterCore } from './../core/index.D';

export interface ArrayLikeFilterLib<Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayFilterCore<Type>;
}
