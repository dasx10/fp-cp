import type { ArrayLikeAtFirstCore } from './core/index.D';
import type { ArrayLikeAtFirstLib }  from "./lib/index.D";

export type ArrayLikeAtFirstMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeAtFirstCore<Type> & ArrayLikeAtFirstLib<Type>;
