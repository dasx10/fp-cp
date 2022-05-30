import type { ArrayLikeFilterDef } from "./contract/index.D";
import type { ArrayLikeFilterLib } from './lib/index.D';

export type ArrayLikeFilterMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFilterDef<Type> & ArrayLikeFilterLib<Type>;
