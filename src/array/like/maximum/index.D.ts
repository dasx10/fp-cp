import type { ArrayLikeMaximumDef } from './contract/index.D';
import type { ArrayLikeMaximumLib } from './lib/index.D';

export type ArrayLikeMaximumMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>>= ArrayLikeMaximumDef<Type> & ArrayLikeMaximumLib<Type>;
