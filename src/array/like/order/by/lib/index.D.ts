import type { ArrayLikeOrderByCore } from "../core/index.D";

export interface ArrayLikeOrderByLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeOrderByCore<Type>
}
