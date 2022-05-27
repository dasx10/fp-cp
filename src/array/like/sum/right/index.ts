// core
import arrayLikeSumRightLib from "./lib/index";
import arrayLikeSumRightDef from "./contract/index";

// interfaces
import type { ArrayLikeSumRightMain } from "./index.D";

const arrayLikeSumRight: ArrayLikeSumRightMain = Object.assign(arrayLikeSumRightDef, arrayLikeSumRightLib);

export default arrayLikeSumRight;
