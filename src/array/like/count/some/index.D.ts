import type { ArrayLikeCountSomeDef } from "./contract/index.D";
import type { ArrayLikeCountSomeLib } from "./lib/index.D";

export type ArrayLikeCountSomeMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeCountSomeDef <Type> &
	ArrayLikeCountSomeLib <Type>;
