import type { ArrayLikeFilterIndexesReversRightLib } from './lib/index.D';
import type { ArrayLikeFilterIndexesReversRightDef } from './contract/index.D';

export type ArrayLikeFilterIndexesReversRightMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
 ArrayLikeFilterIndexesReversRightDef<Type> &
 ArrayLikeFilterIndexesReversRightLib<Type>
