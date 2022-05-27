import type { ToIndexDirect }  from './../../../../index/index.D';

export type ArrayLikeAtDirectIndexCore <Type extends Record<number, unknown> = Record<number, unknown>> = <Index extends keyof X & number, X extends Type>(index: ToIndexDirect<Index>, x: X) => Index | void;
