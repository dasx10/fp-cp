import type { ArrayLikeAtLastIndexCore } from "../../at/last/index/index.D";
import type { ArrayLikeLastIndexLib }    from "./lib/index.D";

export type ArrayLikeLastIndexMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeAtLastIndexCore<Type> & ArrayLikeLastIndexLib <Type>;
