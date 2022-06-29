// core
import _curry2               from "../../../../../function/curry/2/_/index";
import arrayLikeExcludesCore from "../core/index";

// interfaces
import type { ArrayLikeExcludesLastDef } from "./index.D";

const arrayLikeExcludesLastDef = _curry2(arrayLikeExcludesCore) as ArrayLikeExcludesLastDef;
export default arrayLikeExcludesLastDef;
