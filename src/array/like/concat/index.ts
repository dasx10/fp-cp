import arrayLikeConcatDef from "./contract/index";
import arrayLikeConcatLib from "./lib/index";

// interfaces
import type { ArrayLikeConcatMain } from "./index.D";

const arrayLikeConcat: ArrayLikeConcatMain = Object.assign(arrayLikeConcatDef, arrayLikeConcatLib);
export default arrayLikeConcat;
