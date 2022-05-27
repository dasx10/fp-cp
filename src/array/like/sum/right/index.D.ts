import type { ArrayLikeSumRightLib } from './lib/index.D';
import type { ArrayLikeSumRightDef } from './contract/index.D';
export type ArrayLikeSumRightMain<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeSumRightDef<Type> & ArrayLikeSumRightLib<Type>;
