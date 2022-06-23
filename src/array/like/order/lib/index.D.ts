import type { ArrayLikeOrderByMain } from "../by/index.D";

export interface ArrayLikeOrderLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly by: ArrayLikeOrderByMain<Type>
}
