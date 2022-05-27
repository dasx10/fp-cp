import type { ArrayLikeIndexHasDirectDef } from './contract/index.D';
import type { ArrayLikeIndexHasDirectLib } from './lib/index.D';
export type ArrayLikeIndexHasDirectMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeIndexHasDirectDef<Type> & ArrayLikeIndexHasDirectLib<Type>;
