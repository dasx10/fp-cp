import type { ArrayLikeFilterEntriesLib } from './lib/index.D';
import type { ArrayLikeFilterEntriesDef } from './contract/index.D';
export type ArrayLikeFilterEntriesMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeFilterEntriesDef   <Type>
	& ArrayLikeFilterEntriesLib <Type>;
