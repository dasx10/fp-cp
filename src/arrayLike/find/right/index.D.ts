import type { ArrayLikeFindRightDef } from './contract/index.D';
import type { ArrayLikeFindRightLib } from './lib/index.D';

export type ArrayLikeFindRightMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFindRightDef<Type> & ArrayLikeFindRightLib<Type>;
