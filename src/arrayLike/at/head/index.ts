import type { Head } from './index.D';
const head = <X extends ArrayLike<any>>(x: X): Head<X> => x[0];
export default head;
