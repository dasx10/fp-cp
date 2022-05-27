import type { ArrayLikeReduceLib } from './lib/index.D';
import type { ArrayLikeReduceDef } from './contract/index.D';
export type ArrayLikeReduceMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeReduceDef<Type> & ArrayLikeReduceLib<Type>;
