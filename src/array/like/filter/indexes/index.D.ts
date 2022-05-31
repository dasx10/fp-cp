import type { ArrayLikeFilterIndexesLib } from './lib/index.D';
import type { ArrayLikeFilterIndexesDef } from "./contract/index.D";

export type ArrayLikeFilterIndexesMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFilterIndexesDef<Type> & ArrayLikeFilterIndexesLib<Type>;
