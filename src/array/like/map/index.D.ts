import type { ArrayLikeMapDef } from "./contract/index.D";
import type { ArrayLikeMapLib } from "./lib/index.D";

export type ArrayLikeMapMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeMapDef<Type> &
	ArrayLikeMapLib<Type>
