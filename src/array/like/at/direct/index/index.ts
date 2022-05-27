// core
import arrayLikeAtDirectIndexDef from "./contract/index";
import arrayLikeAtDirectIndexLib from "./lib/index";

// interfaces
import type { ArrayLikeAtDirectIndexMain } from "./index.D";

const arrayLikeAtDirectIndex: ArrayLikeAtDirectIndexMain = Object.assign(arrayLikeAtDirectIndexDef, arrayLikeAtDirectIndexLib);

export default arrayLikeAtDirectIndex;
