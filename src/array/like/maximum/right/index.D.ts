import type { ArrayLikeMaximumRightLib } from './lib/index.D';
import type { ArrayLikeMaximumRightDef } from './contract/index.D';
export type ArrayLikeMaximumRightMain<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeMaximumRightDef<Type> & ArrayLikeMaximumRightLib<Type>;
