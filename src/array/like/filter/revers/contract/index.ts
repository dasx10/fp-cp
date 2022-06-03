// core
import _curry2                    from "../../../../../function/curry/2/_/index";
import arrayLikeFilterReversCore from "../core/index";

// interfaces
import type { ArrayLikeFilterReverseDef } from "./index.D";

const arrayLikeFilterReversDef = _curry2(arrayLikeFilterReversCore) as ArrayLikeFilterReverseDef;
export default arrayLikeFilterReversDef;
