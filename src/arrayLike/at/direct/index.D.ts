import type { ArrayLikeAtDirectDef } from './contract/index.D';
import type { ArrayLikeAtDirectLib } from './lib/index.D';

export type ArrayLikeAtDirectMain <Type extends Record<number, unknown> = Record<number, unknown>> = ArrayLikeAtDirectDef<Type> & ArrayLikeAtDirectLib<Type>;
