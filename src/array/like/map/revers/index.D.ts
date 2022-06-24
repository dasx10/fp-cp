import type { ArrayLikeMapReversDef } from "./contract/index.D";
import type { ArrayLikeMapReversLib } from "./lib/index.D";

export type ArrayLikeMapReversMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeMapReversDef <Type> &
	ArrayLikeMapReversLib <Type>
