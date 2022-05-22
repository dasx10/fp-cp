import type { ArrayLikeFindIndexCore } from "../core/index.D";

export interface ArrayLikeFindIndexLib<Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	core: ArrayLikeFindIndexCore<Type>
}
