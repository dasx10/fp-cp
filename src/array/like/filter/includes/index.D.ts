import type { ArrayLikeFilterIncludesLib } from './lib/index.D';
import type { ArrayLikeFilterIncludesDef } from './contract/index.D';
export type ArrayLikeFilterIncludesMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeFilterIncludesDef<Type> &
	ArrayLikeFilterIncludesLib<Type>;
