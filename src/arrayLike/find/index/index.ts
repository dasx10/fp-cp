// core
import arrayLikeFindIndexLib from "./lib/index";
import arrayLikeFindIndexDef from "./contract/index";

// interfaces
import { ArrayLikeFindIndexMain } from "./index.D";

const arrayLikeFindIndex: ArrayLikeFindIndexMain = Object.assign(arrayLikeFindIndexDef, arrayLikeFindIndexLib);

export default arrayLikeFindIndex;
