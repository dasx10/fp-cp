import type { ArrayLikeFilterOfDef } from "./contract/index.D";
import type { ArrayLikeFilterOfLib } from "./lib/index.D";

export type ArrayLikeFilterOfMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeFilterOfDef<Type> & 
	ArrayLikeFilterOfLib<Type>;
