// core
import arrayLikeFilterReversDef from "./contract/index";
import arrayLikeFilterReversLib from "./lib/index";

// interfaces
import type { ArrayLikeFilterReversMain } from './index.D';

const arrayLikeFilterRevers: ArrayLikeFilterReversMain = Object.assign(arrayLikeFilterReversDef, arrayLikeFilterReversLib);
export default arrayLikeFilterRevers;
