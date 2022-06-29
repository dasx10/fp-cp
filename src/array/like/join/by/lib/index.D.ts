import type { ArrayLikeJoinByCore } from "../core/index.D";

export interface ArrayLikeJoinByLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeJoinByCore<Type>
}
