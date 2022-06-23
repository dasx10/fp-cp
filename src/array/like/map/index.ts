import arrayLikeMapDef from "./contract/index";
import arrayLikeMapLib from "./lib/index";

import type  { ArrayLikeMapMain } from "./index.D";

const arrayLikeMap: ArrayLikeMapMain = Object.assign(arrayLikeMapDef, arrayLikeMapLib);
export default arrayLikeMap;
