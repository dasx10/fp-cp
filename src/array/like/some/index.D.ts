import type { ArrayLikeSomeLib } from './lib/index.D';
import type { ArrayLikeSomeDef } from './contract/index.D';
export type ArrayLikeSomeMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeSomeDef<Type> & ArrayLikeSomeLib<Type>;
