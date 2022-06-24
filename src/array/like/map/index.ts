import arrayLikeMapDef from "./contract/index";
import arrayLikeMapLib from "./lib/index";

import type  { ArrayLikeMapMain } from "./index.D";

const arrayLikeMapRevers: ArrayLikeMapMain = Object.assign(arrayLikeMapDef, arrayLikeMapLib);
export default arrayLikeMapRevers;
