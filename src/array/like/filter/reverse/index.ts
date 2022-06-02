// core
import arrayLikeFilterReverseDef from "./contract/index";
import arrayLikeFilterReverseLib from "./lib/index";

// interfaces
import type { ArrayLikeFIlterReverseMain } from './index.D';

const arrayLikeFilterReverse: ArrayLikeFIlterReverseMain = Object.assign(arrayLikeFilterReverseDef, arrayLikeFilterReverseLib);
export default arrayLikeFilterReverse;
