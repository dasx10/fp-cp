// core
import arrayLikeCountRightDef           from "./contract/index";
import arrayLikeCountRightLib           from "./lib/index";

// interfaces
import type { ArrayLikeCountRightMain } from "./index.D";

const arrayLikeCountRight: ArrayLikeCountRightMain = Object.assign(arrayLikeCountRightDef, arrayLikeCountRightLib);

export default arrayLikeCountRight;
