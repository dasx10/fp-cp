import type { ArrayLikeAtDirectDef } from './contract/index.D';
import type { ArrayLikeAtDirectLib } from './lib/index.D';

export type ArrayLikeAtDirectMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeAtDirectDef<Type> & ArrayLikeAtDirectLib<Type>;
