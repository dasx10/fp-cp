import type { ArrayLikeFilterRightLib } from './lib/index.D';
import type { ArrayLikeFilterRightDef } from './contract/index.D';
export type ArrayLikeFilterRightMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFilterRightDef<Type> & ArrayLikeFilterRightLib<Type>;
