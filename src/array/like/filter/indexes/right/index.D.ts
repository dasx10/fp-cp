import type { ArrayLikeFilterIndexesRightLib } from './lib/index.D';
import type { ArrayLikeFilterIndexesRightDef } from './contract/index.D';
export type ArrayLikeFilterIndexesRightMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeFilterIndexesRightDef   <Type>
	& ArrayLikeFilterIndexesRightLib <Type>
