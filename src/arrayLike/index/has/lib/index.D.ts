import type { ArrayLikeIndexHasCore }       from './../core/index.D';
import type { ArrayLikeIndexHasInvertMain } from './../invert/index.D';
import type { ArrayLikeIndexHasDirectMain } from './../direct/index.D';

export interface ArrayLikeIndexHasLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core   : ArrayLikeIndexHasCore       <Type>;
	readonly direct : ArrayLikeIndexHasDirectMain <Type>;
	readonly invert : ArrayLikeIndexHasInvertMain <Type>;
}
