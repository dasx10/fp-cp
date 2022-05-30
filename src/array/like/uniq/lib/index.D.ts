import type { ArrayLikeUniqByMain } from "../by/index.D";

export interface ArrayLikeUniqLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly by: ArrayLikeUniqByMain<Type>
}
