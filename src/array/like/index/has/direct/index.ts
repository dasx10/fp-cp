// core
import arrayLikeIndexHasDirectDef     from "./contract/index";
import arrayLikeIndexHasDirectLib     from "./lib/index";

// interfaces
import type { ArrayLikeIndexHasDirectMain } from "./index.D";

const arrayLikeIndexHasDirect: ArrayLikeIndexHasDirectMain = Object.assign(arrayLikeIndexHasDirectDef, arrayLikeIndexHasDirectLib);
export default arrayLikeIndexHasDirect;
