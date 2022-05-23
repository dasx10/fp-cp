// core
import arrayLikeFindDef from "./contract/index";
import arrayLikeFindLib from "./lib/index";

// interfaces
import type { ArrayLikeFindMain } from './index.D';

const arrayLikeFind: ArrayLikeFindMain = Object.assign(arrayLikeFindDef, arrayLikeFindLib);

export default arrayLikeFind;
