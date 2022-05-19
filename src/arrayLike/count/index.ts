// core
import arrayLikeCountDef from "./contract/index";
import arrayLikeCountLib from "./lib/index";

// interfaces
import type { ArrayLikeCountMain } from "./index.D";

const arrayLikeCount: ArrayLikeCountMain = Object.assign(arrayLikeCountDef, arrayLikeCountLib);

export default arrayLikeCount;
