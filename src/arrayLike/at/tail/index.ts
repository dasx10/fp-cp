import type { ArrayLikeTail, ArrayLikeTailCore } from './index.D';
const arrayLikeTail: ArrayLikeTailCore = <X extends ArrayLike<any>>(x: X): ArrayLikeTail<X> => x[x.length - 1];
export default arrayLikeTail;
