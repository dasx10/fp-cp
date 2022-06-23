import type { ArrayLikeMapCore } from "../core/index.D";

export interface ArrayLikeMapLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeMapCore<Type>
}
