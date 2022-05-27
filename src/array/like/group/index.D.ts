import type { ArrayLikeGroupDef } from './contract/index.D';
import type { ArrayLikeGroupLib } from './lib/index.D';
export type ArrayLikeGroupMain<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeGroupDef<Type> & ArrayLikeGroupLib<Type>;
