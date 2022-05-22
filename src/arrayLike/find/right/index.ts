// core
import arrayLikeFindRightLib from "./lib/index";
import arrayLikeFindRightDef from "./contract/index";

// interfaces
import type { ArrayLikeFindRightMain } from "./index.D";

const arrayLikeFindRight: ArrayLikeFindRightMain = Object.assign(arrayLikeFindRightDef, arrayLikeFindRightLib);

export default arrayLikeFindRight;
