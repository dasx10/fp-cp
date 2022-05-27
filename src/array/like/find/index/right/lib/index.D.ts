import type { ArrayLikeFindIndexRightCore } from "../core/index.D";

export interface ArrayLikeFindIndexRightLib<Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeFindIndexRightCore<Type>
}
