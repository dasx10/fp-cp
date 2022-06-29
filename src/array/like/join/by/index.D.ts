import type { ArrayLikeJoinByLib } from './lib/index.D';
import type { ArrayLikeJoinByDef } from './contract/index.D';
export type ArrayLikeJoinByMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeJoinByDef <Type> &
	ArrayLikeJoinByLib <Type>
