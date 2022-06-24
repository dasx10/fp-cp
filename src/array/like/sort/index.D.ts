import type { ArrayLikeSortDef } from "./contract/index.D";
import type { ArrayLikeSortLib } from "./lib/index.D";

export type ArrayLikeSortMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeSortDef<Type> & 
	ArrayLikeSortLib<Type> ;
