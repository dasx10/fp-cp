import type { ArrayLikeTail, ArrayLikeTailCore } from './index.D';
const tail: ArrayLikeTailCore = <X extends ArrayLike<any>>(x: X): ArrayLikeTail<X> => x[x.length - 1];
export default tail;
