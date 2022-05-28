import type { ArrayLikeMinimumLib } from './lib/index.D';
import type { ArrayLikeMinimumDef } from './contract/index.D';

export type ArrayLikeMinimumMain<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeMinimumDef<Type> & ArrayLikeMinimumLib<Type>;
