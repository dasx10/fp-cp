// core
import arrayLikeGroupDef from "./contract/index";
import arrayLikeGroupLib from "./lib/index";

// dependencies
import type { ArrayLikeGroupMain } from "./index.D";

const arrayLikeGroup: ArrayLikeGroupMain = Object.assign(arrayLikeGroupDef, arrayLikeGroupLib);

export default arrayLikeGroup;
