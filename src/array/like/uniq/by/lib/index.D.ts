import type { ArrayLikeUniqByCore } from "../core/index.D";

export interface ArrayLikeUniqByLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeUniqByCore<Type>;
}
