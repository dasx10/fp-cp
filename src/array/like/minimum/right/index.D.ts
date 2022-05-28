import type { ArrayLikeMinimumRightLib } from './lib/index.D';
import type { ArrayLikeMinimumRightDef } from './contract/index.D';

export type ArrayLikeMinimumRightMain<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeMinimumRightDef<Type> & ArrayLikeMinimumRightLib<Type>;
