import type { ArrayLikeAtDirectIndexDef } from "./contract/index.D";
import type { ArrayLikeAtDirectIndexLib } from "./lib/index.D";

export type ArrayLikeAtDirectIndexMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	  ArrayLikeAtDirectIndexDef<Type>
	& ArrayLikeAtDirectIndexLib<Type>;
