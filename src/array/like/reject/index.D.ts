// interfaces
import type { ArrayLikeRejectLib } from './lib/index.D';
import type { ArrayLikeRejectDef } from './contract/index.D';


export type ArrayLikeRejectMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeRejectDef<Type> & ArrayLikeRejectLib<Type>;
