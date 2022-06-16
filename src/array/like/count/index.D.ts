import type { ArrayLikeCountDef } from "./contract/index.D";
import type { ArrayLikeCountLib } from "./lib/index.D";

export type ArrayLikeCountMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeCountDef<Type> &
	ArrayLikeCountLib<Type>;
