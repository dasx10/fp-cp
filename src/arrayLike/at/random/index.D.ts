import type { ArrayLikeAtRandomCore } from "./core/index.D";
import type { ArrayLikeAtRandomLib }  from "./lib/index.D";

export type ArrayLikeAtRandomMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeAtRandomCore<Type> & ArrayLikeAtRandomLib<Type>;
