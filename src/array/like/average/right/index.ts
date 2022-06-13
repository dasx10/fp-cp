// core
import arrayLikeAverageRightLib from "./lib/index";
import arrayLikeAverageRightDef from "./contract/index";

// interfaces
import type { ArrayLikeAverageRightMain } from "./index.D";

const arrayLikeAverageRight: ArrayLikeAverageRightMain = Object.assign(arrayLikeAverageRightDef, arrayLikeAverageRightLib);

export default arrayLikeAverageRight;
