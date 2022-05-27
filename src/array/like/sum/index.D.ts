import type { ArrayLikeSumLib } from './lib/index.D';
import type { ArrayLikeSumDef } from './contract/index.D';
export type ArrayLikeSumLikeMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeSumDef<Type> & ArrayLikeSumLib<Type>;
