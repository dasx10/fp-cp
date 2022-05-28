// core
import arrayLikeMinimumLib from "./lib/index";
import arrayLikeMinimumDef from "./contract/index";

// interfaces
import type { ArrayLikeMinimumMain } from './index.D';

const arrayLikeMinimum: ArrayLikeMinimumMain = Object.assign(arrayLikeMinimumDef, arrayLikeMinimumLib);

export default arrayLikeMinimum;
