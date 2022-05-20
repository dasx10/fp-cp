import type { ArrayLikeAtInvertDef } from "./contract/index.D";
import type { ArrayLikeAtInvertLib } from "./lib/index.D";

export type ArrayLikeAtInvertMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeAtInvertDef<Type> & ArrayLikeAtInvertLib<Type>;
