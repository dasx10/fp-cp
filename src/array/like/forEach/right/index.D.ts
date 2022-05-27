import type { ArrayLikeForEachRightDef } from "./contract/index.D";
import type { ArrayLikeForEachRightLib } from "./lib/index.D";

export type ArrayLikeForEachRightMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeForEachRightDef<Type> & ArrayLikeForEachRightLib<Type>
