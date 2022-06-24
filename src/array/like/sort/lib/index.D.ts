import type { ArrayLikeSortCore } from './../core/index.D';

export interface ArrayLikeSortLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeSortCore<Type>;
}
