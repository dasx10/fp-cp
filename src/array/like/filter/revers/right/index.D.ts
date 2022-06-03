import type { ArrayLikeFilterReversRightDef } from "./contract/index.D";
import type { ArrayLikeFilterReversRightLib } from "./lib/index.D";

export type ArrayLikeFilterReversRightMain<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeFilterReversRightDef <Type> &
	ArrayLikeFilterReversRightLib <Type>
