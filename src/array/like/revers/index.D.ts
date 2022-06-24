import type { ArrayLikeReversCore } from './core/index.D';
import type { ArrayLikeReversLib }  from './lib/index.D';

export type ArrayLikeReversMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeReversCore <Type> &
	ArrayLikeReversLib  <Type>
