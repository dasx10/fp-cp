import arrayLikeForEachRightDef from "./contract/index";
import arrayLikeForEachRightLib from "./lib/index";

// interfaces
import type { ArrayLikeForEachRightMain } from "./index.D";

const arrayLikeForEachRight: ArrayLikeForEachRightMain = Object.assign(arrayLikeForEachRightDef, arrayLikeForEachRightLib);
export default arrayLikeForEachRight;
