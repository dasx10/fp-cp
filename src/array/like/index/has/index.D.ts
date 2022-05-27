import type { ArrayLikeIndexHasLib } from './lib/index.D';
import type { ArrayLikeIndexHasDef } from './contract/index.D';

export type ArrayLikeIndexHasMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeIndexHasDef<Type> & ArrayLikeIndexHasLib<Type>;
