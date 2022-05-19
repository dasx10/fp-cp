import type { ToIndexDirect }  from './../../../../index/index.D';
import type { ArrayLikeIndex } from "../../../../index.D"

export type ArrayLikeAtDirectIndexCore = <Index extends ArrayLikeIndex<X>, X extends ArrayLike<any>>(index: ToIndexDirect<Index>, { length }: X) => Index | void;
