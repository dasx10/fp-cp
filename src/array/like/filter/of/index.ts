import arrayLikeFilterOfDef from "./contract/index";
import arrayLikeFilterOfLib from "./lib/index";

import type { ArrayLikeFilterOfMain } from "./index.D";

const arrayLikeFilterOf: ArrayLikeFilterOfMain = Object.assign(arrayLikeFilterOfDef, arrayLikeFilterOfLib);
export default arrayLikeFilterOf;
