import type { ArrayLikeJoinLib } from './lib/index.D';
import type { ArrayLikeJoinDef } from './contract/index.D';

export type ArrayLikeJoinMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeJoinDef<Type> & ArrayLikeJoinLib<Type>;
