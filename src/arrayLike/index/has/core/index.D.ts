import type { ToIndex } from './../../index.D';
export type ArrayLikeIndexHasCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <Index extends number, X extends Type>(index: ToIndex<Index>, x: X) => boolean; 
