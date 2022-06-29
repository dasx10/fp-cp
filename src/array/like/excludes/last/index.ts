// core
import arrayLikeExcludesLastDef from "./contract/index";
import arrayLikeExcludesLastLib from "./lib/index";

// interfaces
import type { ArrayLikeExcludesLastMain } from "./index.D";

const arrayLikeExcludesLast: ArrayLikeExcludesLastMain = Object.assign(arrayLikeExcludesLastDef, arrayLikeExcludesLastLib);
export default arrayLikeExcludesLast;
