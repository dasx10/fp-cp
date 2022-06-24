import type { ArrayLikeMapCore } from "../core/index.D";
import type { ArrayLikeMapReversMain } from "../revers/index.D";

export interface ArrayLikeMapLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core   : ArrayLikeMapCore<Type>;
	readonly revers : ArrayLikeMapReversMain<Type>;
}
