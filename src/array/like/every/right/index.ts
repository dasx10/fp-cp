// core
import arrayLikeEveryRightDef from "./contract/index";
import arrayLikeEveryRightLib from "./lib/index";

// interfaces
import type { ArrayLikeEveryRightMain } from "./index.D";

const arrayLikeEveryRight: ArrayLikeEveryRightMain = Object.assign(arrayLikeEveryRightDef, arrayLikeEveryRightLib);

export default arrayLikeEveryRight;
