import type { ArrayLikeFindDef } from './contract/index.D';
import type { ArrayLikeFindLib } from './lib/index.D';

export type ArrayLikeFindMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFindDef<Type> & ArrayLikeFindLib<Type>;
