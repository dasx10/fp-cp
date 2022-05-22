import type { ArrayLikeFindIndexLib } from './lib/index.D';
import type { ArrayLikeFindIndexDef } from './contract/index.D';

export type ArrayLikeFindIndexMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFindIndexDef<Type> & ArrayLikeFindIndexLib<Type>;
