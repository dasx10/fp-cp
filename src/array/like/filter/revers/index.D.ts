import type { ArrayLikeFilterReverseDef } from './contract/index.D';
import type { ArrayLikeFilterReversLib }  from './lib/index.D';

export type ArrayLikeFilterReversMain<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFilterReverseDef<Type> & ArrayLikeFilterReversLib<Type>;
