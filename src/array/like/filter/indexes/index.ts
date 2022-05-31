// core
import arrayLikeFilterIndexesDef from "./contract/index";
import arrayLikeFilterIndexesLib from "./lib/index";

// interfaces
import { ArrayLikeFilterIndexesMain } from "./index.D";

const arrayLikeFilterIndexes: ArrayLikeFilterIndexesMain = Object.assign(arrayLikeFilterIndexesDef, arrayLikeFilterIndexesLib);
export default arrayLikeFilterIndexes;
