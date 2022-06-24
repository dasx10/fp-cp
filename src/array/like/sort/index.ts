// core
import arrayLikeSortDef from "./contract/index";
import arrayLikeSortLib from "./lib/index";

// interfaces
import { ArrayLikeSortMain } from "./index.D";

const arrayLikeSort: ArrayLikeSortMain = Object.assign(arrayLikeSortDef, arrayLikeSortLib);
export default arrayLikeSort;
