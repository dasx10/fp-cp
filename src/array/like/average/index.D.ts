import type { ArrayLikeAverageDef } from "./contract/index.D";
import type { ArrayLikeAverageLib } from "./lib/index.D";

export type ArrayLikeAverageMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeAverageDef <Type> & 
	ArrayLikeAverageLib <Type>;
