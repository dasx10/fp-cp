import type { ArrayCore } from './index.D';

/**
 * Array constructor
 * @example
 * const myArray = array(1, 2, 3); // [1, 2, 3];
 */
const arrayCore: ArrayCore = <ArrayValues extends readonly unknown[]>(...arrayValues: ArrayValues) => arrayValues;
export default arrayCore;
