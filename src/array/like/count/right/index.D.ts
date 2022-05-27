import type { ArrayLikeCountRightDef } from "./contract/index.D";
import type { ArrayLikeCountRightLib } from "./lib/index.D";

export type ArrayLikeCountRightMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeCountRightDef <Type>
	& ArrayLikeCountRightLib <Type>; 
