import arrayLikeFilterIncludesDef from "./contract/index";
import arrayLikeFilterIncludesLib from "./lib/index";

import type { ArrayLikeFilterIncludesMain } from "./index.D";

const arrayLikeFilterIncludes: ArrayLikeFilterIncludesMain = Object.assign(arrayLikeFilterIncludesDef, arrayLikeFilterIncludesLib);
export default arrayLikeFilterIncludes;
