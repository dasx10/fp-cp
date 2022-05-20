import type { ArrayLikeAtRightDef } from "./contract/index.D";
import type { ArrayLikeAtRightLib } from "./lib/index.D";

export type ArrayLikeAtRightMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeAtRightDef<Type> & ArrayLikeAtRightLib;
