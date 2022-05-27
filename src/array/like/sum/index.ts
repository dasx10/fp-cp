// dependencies
import arrayLikeSumDef from "./contract/index";
import arrayLikeSumLib from "./lib/index";

// interfaces
import type { ArrayLikeSumLikeMain } from "./index.D";


const arrayLikeSum: ArrayLikeSumLikeMain = Object.assign(arrayLikeSumDef, arrayLikeSumLib);

export default arrayLikeSum;
