import { MAX } from "./index.D";
const _max = <Y extends number, X extends number>(y: Y, x: X): MAX<Y, X> => x > y ? x : y;
export default _max;
