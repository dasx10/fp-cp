// core
import arrayLikeFilterReversDef from "./contract/index";
import arrayLikeFIlterReversLib from "./lib/index";

// interfaces
import type { ArrayLikeFilterReversMain } from './index.D';

const arrayLikeFilterRevers: ArrayLikeFilterReversMain = Object.assign(arrayLikeFilterReversDef, arrayLikeFIlterReversLib);
export default arrayLikeFilterRevers;
