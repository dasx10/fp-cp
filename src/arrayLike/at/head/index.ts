import type { ArrayLikeHead, ArrayLikeHeadCore } from './index.D';

const head: ArrayLikeHeadCore = <X extends ArrayLike<any>>(x: X): ArrayLikeHead<X> => x[0];
export default head;
