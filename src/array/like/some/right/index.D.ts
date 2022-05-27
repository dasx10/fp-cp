import type { ArrayLikeSomeRightLib } from './lib/index.D';
import type { ArrayLikeSomeRightDef } from './contract/index.D';
export type ArrayLikeSomeRightMain<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeSomeRightDef<Type> & ArrayLikeSomeRightLib<Type>;
