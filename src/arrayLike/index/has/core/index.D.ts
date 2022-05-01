import type { ToIndexLeft } from "../../index.D";

export type ArrayLikeIndexHasCore = <Index extends number>(index: ToIndexLeft<Index>, x: ArrayLike<any>) => boolean; 
