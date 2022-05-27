// core
import arrayLikeAtRightLib from "./lib/index";
import arrayLikeAtRightDef from "./contract/index";

// interfaces
import type { ArrayLikeAtRightMain } from "./index.D";

const arrayLikeAtRight: ArrayLikeAtRightMain = Object.assign(arrayLikeAtRightDef, arrayLikeAtRightLib);
export default arrayLikeAtRight;
