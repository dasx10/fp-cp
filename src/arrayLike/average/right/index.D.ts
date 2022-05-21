import type { ArrayLikeAverageRightDef } from "./contract/index.D";
import type { ArrayLikeAverageRightLib } from "./lib/index.D";

export type ArrayLikeAverageRightMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeAverageRightDef<Type> 
	& ArrayLikeAverageRightLib<Type>;
