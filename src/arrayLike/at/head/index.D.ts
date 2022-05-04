import { ArrayLikeAt } from './../core/index.D';

export type ArrayLikeHead <X extends ArrayLike<any>> = ArrayLikeAt<X>;
export type ArrayLikeHeadCore = <X extends ArrayLike<any>>(x: X) => ArrayLikeAt<X>;
