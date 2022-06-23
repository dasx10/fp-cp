import type { ArrayLikeOrderByDef } from "./contract/index.D";
import type { ArrayLikeOrderByLib } from "./lib/index.D";

export type ArrayLikeOrderByMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
  ArrayLikeOrderByDef<Type> &
	ArrayLikeOrderByLib<Type>;
