import type { ArrayLikeUniqCore } from "./core/index.D";
import type { ArrayLikeUniqLib }  from "./lib/index.D";

export type ArrayLikeUniqMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeUniqCore<Type> & ArrayLikeUniqLib<Type>;
