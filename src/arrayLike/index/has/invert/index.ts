// core
import arrayLikeIndexHasInvertDef from "./contract/index";
import arrayLikeIndexHasInvertLib from "./lib/index";

// interfaces
import type { ArrayLikeIndexHasInvertMain } from "./index.D";

const arrayLikeIndexHasInvert: ArrayLikeIndexHasInvertMain = Object.assign(arrayLikeIndexHasInvertDef, arrayLikeIndexHasInvertLib);
export default arrayLikeIndexHasInvert;
