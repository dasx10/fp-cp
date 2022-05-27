import type { ArrayLikeForEachLib } from './lib/index.D';
import type { ArrayLikeForEachDef } from './contract/index.D';

export type ArrayLikeForEachMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeForEachDef<Type> & ArrayLikeForEachLib<Type>;
