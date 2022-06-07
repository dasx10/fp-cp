import type { ArrayLikeFilterIndexesReversDef } from './contract/index.D';
import type { ArrayLikeFilterIndexesReversLib } from './lib/index.D';

export type ArrayLikeFilterIndexesReversMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeFilterIndexesReversDef<Type> &
	ArrayLikeFilterIndexesReversLib<Type>;
