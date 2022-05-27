import type { ArrayLikeIndexOfDef } from './contract/index.D';
import type { ArrayLikeIndexOfLib } from './lib/index.D';

export type ArrayLikeIndexOfMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeIndexOfDef<Type> & ArrayLikeIndexOfLib<Type>;
