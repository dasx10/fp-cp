import type { ArrayLikeGroupRightDef } from "./contract/index.D";
import type { ArrayLikeGroupRightLib } from "./lib/index.D";

export type ArrayLikeGroupRightMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> =
	ArrayLikeGroupRightDef <Type> &
	ArrayLikeGroupRightLib <Type>
