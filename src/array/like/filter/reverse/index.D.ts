import type { ArrayLikeFilterReverseDef } from './contract/index.D';
import type { ArrayLikeFilterReverseLib } from './lib/index.D';

export type ArrayLikeFIlterReverseMain<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFilterReverseDef<Type> & ArrayLikeFilterReverseLib<Type>;
