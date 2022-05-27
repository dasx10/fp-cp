import type { ArrayLikeForEachRightMain } from './../right/index.D';
import type { ArrayLikeForEachCore } from "../core/index.D";

export interface ArrayLikeForEachLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core  : ArrayLikeForEachCore     <Type>;
	readonly right : ArrayLikeForEachRightMain<Type>;
}
