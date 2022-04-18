import { All } from "../../is/index.D";

/**
 * Array constructor
 * @example
 * const myArray = array(1, 2, 3); // [1, 2, 3];
 */
function array <Values extends (unknown | All)[]>(...args: Values): Values {
  return args;
}

export default array;

