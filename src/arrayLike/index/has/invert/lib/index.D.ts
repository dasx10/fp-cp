import type { ArrayLikeIndexHasInvertCore } from "../core/index.D";

export interface ArrayLikeIndexHasInvertLib<Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeIndexHasInvertCore<Type>;
}
