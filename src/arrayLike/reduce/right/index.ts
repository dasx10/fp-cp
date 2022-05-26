import arrayLikeReduceRightDef from "./contract/index";
import arrayLikeReduceRightLib from "./lib/index";

// interfaces
import type { ArrayLikeReduceRightMain } from "./index.D";

const arrayLikeReduceRight: ArrayLikeReduceRightMain = Object.assign(arrayLikeReduceRightDef, arrayLikeReduceRightLib);
export default arrayLikeReduceRight;
