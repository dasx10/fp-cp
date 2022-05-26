import type { ArrayLikeIndexesLib } from './lib/index.D';
import type { ArrayLikeIndexesCore } from './core/index.D';

export type ArrayLikeIndexesMain<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeIndexesCore<Type> & ArrayLikeIndexesLib<Type>;
