import type { ArrayLikeFilterEntriesRightDef } from './contract/index.D';
import type { ArrayLikeFilterEntriesRightLib } from './lib/index.D';

export type ArrayLikeFilterEntriesRightMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeFilterEntriesRightDef<Type>
	& ArrayLikeFilterEntriesRightLib<Type>
