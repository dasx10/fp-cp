import type { ArrayLikeFindIndexRightLib } from './lib/index.D';
import type { ArrayLikeFindIndexRightDef } from './contract/index.D';

export type ArrayLikeFindIndexRightMain<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFindIndexRightDef<Type> & ArrayLikeFindIndexRightLib<Type>;
