// core
import arrayLikeMaximumLib from "./lib/index";
import arrayLIkeMaximumDef from "./contract/index";

// interfaces
import type { ArrayLikeMaximumMain } from './index.D';

const arrayLikeMaximum: ArrayLikeMaximumMain = Object.assign(arrayLIkeMaximumDef, arrayLikeMaximumLib);

export default arrayLikeMaximum;
