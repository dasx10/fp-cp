// core
import arrayLikeCountIncludesDef from "./contract/index";
import arrayLikeCountIncludesLib from "./lib/index";

// interfaces
import type { ArrayLikeCountIncludesMain } from "./index.D";

const arrayLikeCountIncludes: ArrayLikeCountIncludesMain = Object.assign(arrayLikeCountIncludesDef, arrayLikeCountIncludesLib);
export default arrayLikeCountIncludes;
