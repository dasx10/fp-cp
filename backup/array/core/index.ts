import type { ArrayCore } from './index.D';
import type { All }       from "../../is/index.D";

/**
 * Array constructor
 * @example
 * const myArray = array(1, 2, 3); // [1, 2, 3];
 */
const arrayCore: ArrayCore = <Values extends (unknown | All)[]>(...args: Values) => args;
export default arrayCore;

