// core
import arrayLikeExcludesDef from "./contract/index";
import arrayLikeExcludesLib from "./lib/index";

// interfaces
import type { ArrayLikeExcludesMain } from "./index.D";

const arrayLikeExcludes: ArrayLikeExcludesMain = Object.assign(arrayLikeExcludesDef, arrayLikeExcludesLib);
export default arrayLikeExcludes;
