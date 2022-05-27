import type { ArrayLikeIndexHasInvertLib } from './lib/index.D';
import type { ArrayLikeIndexHasInvertDef } from './contract/index.D';
export type ArrayLikeIndexHasInvertMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeIndexHasInvertDef<Type> & ArrayLikeIndexHasInvertLib<Type>;
