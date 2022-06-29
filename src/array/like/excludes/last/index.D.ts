import type { ArrayLikeExcludesLastLib } from './lib/index.D';
import type { ArrayLikeExcludesLastDef } from "./contract/index.D";

export type ArrayLikeExcludesLastMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> =
	ArrayLikeExcludesLastDef<Type> & 
	ArrayLikeExcludesLastLib<Type> ;
