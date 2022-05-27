import type { ArrayLikeAtLastCore } from "./core/index.D";
import type { ArrayLikeAtLastLib }  from "./lib/index.D";

export type ArrayLikeAtLastMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeAtLastCore<Type> & ArrayLikeAtLastLib<Type>;
