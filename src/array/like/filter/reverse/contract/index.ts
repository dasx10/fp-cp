// core
import _curry2                    from "../../../../../function/curry/2/_/index";
import arrayLikeFilterReverseCore from "../core/index";

// interfaces
import type { ArrayLikeFilterReverseDef } from "./index.D";

const arrayLikeFilterReverseDef = _curry2(arrayLikeFilterReverseCore) as ArrayLikeFilterReverseDef;
export default arrayLikeFilterReverseDef;
