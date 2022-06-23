import arrayLikeOrderByDef from "./contract/index";
import arrayLikeOrderByLib from "./lib/index";

import type { ArrayLikeOrderByMain } from "./index.D";

const arrayLikeOrderBy: ArrayLikeOrderByMain = Object.assign(arrayLikeOrderByDef, arrayLikeOrderByLib);
export default arrayLikeOrderBy;
