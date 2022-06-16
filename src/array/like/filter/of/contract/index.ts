import _curry2                       from "../../../../../function/curry/2/_/index";
import arrayLikeFilterOfCore         from "../core/index";
import type { ArrayLikeFilterOfDef } from "./index.D";

const arrayLikeFilterOfDef = _curry2(arrayLikeFilterOfCore) as ArrayLikeFilterOfDef;
export default arrayLikeFilterOfDef;
