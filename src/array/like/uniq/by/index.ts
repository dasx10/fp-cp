// core
import arrayLikeUniqByDef from "./contract/index";
import arrayLikeUniqByLib from "./lib/index";

// interfaces
import type { ArrayLikeUniqByMain } from "./index.D";

const arrayLikeUniqBy: ArrayLikeUniqByMain = Object.assign(arrayLikeUniqByDef, arrayLikeUniqByLib);
export default arrayLikeUniqBy;
