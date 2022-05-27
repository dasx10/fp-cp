import type { ArrayLikeLastIndexMain } from "../index/index.D";

export interface ArrayLikeLastLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	index: ArrayLikeLastIndexMain <Type>;
}
