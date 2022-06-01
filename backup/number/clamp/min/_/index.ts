import type { MIN } from './index.D';
const _min = <Y extends number, X extends number>(y: Y, x: X): MIN<X, Y> => x < y ? x : y;
export default _min;
