// interfaces
import type { ArrayLikeAtDef } from './contract/index.D';
import type { ArrayLikeAtLib } from './lib/index.D';

export type ArrayLikeAtMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeAtDef<Type> & ArrayLikeAtLib<Type>;
