import _curry2                      from "../../../../../function/curry/2/_/index";
import arrayLikeOrderByCore         from "../core/index";
import type { ArrayLikeOrderByDef } from "./index.D";

const arrayLikeOrderByDef = _curry2(arrayLikeOrderByCore) as ArrayLikeOrderByDef;
export default arrayLikeOrderByDef;
