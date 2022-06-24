// core
import arrayLikeMapReversDef from "./contract/index";
import arrayLikeMapReversLib from "./lib/index";

// interfaces
import { ArrayLikeMapReversMain } from "./index.D";

const arrayLikeReversMap: ArrayLikeMapReversMain = Object.assign(arrayLikeMapReversDef, arrayLikeMapReversLib);
export default arrayLikeReversMap;
