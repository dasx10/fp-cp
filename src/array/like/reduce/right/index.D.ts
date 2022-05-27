import type { ArrayLikeReduceRightDef } from './contract/index.D';
import type { ArrayLikeReduceRightLib } from './lib/index.D';

export type ArrayLikeReduceRightMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeReduceRightDef<Type> & ArrayLikeReduceRightLib<Type>;
