import type { Tail } from './index.D';
const tail = <X extends ArrayLike<any>>(x: X): Tail<X> => x[x.length - 1];
export default tail;
