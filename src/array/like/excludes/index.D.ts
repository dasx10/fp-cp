import type { ArrayLikeExcludesLib } from './lib/index.D';
import type { ArrayLikeExcludesDef } from "./contract/index.D";

export type ArrayLikeExcludesMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> =
	ArrayLikeExcludesDef<Type> & 
	ArrayLikeExcludesLib<Type> ;
