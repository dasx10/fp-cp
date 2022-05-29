import type { ArrayLikeJoin } from './../core/index.D';
export type ArrayLikeJoinUpCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(array: X) => ArrayLikeJoin<X>; 
