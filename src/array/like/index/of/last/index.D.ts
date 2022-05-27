import type { ArrayLikeIndexOfLastDef } from './contract/index.D';
import type { ArrayLikeIndexOfLastLib } from './lib/index.D';

export type ArrayLikeIndexOfLastMain<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeIndexOfLastDef<Type> & ArrayLikeIndexOfLastLib<Type>;
