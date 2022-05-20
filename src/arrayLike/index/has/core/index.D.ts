import type { ToIndexDirect } from "../../index.D";

export type ArrayLikeIndexHasCore = <Index extends number>(index: ToIndexDirect<Index>, x: ArrayLike<unknown>) => boolean; 
