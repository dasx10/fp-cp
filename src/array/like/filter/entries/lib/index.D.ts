import type { ArrayLikeFilterEntriesCore } from './../core/index.D';
export interface ArrayLikeFilterEntriesLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeFilterEntriesCore<Type>
}
