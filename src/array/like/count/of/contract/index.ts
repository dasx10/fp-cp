import _curry2 from "../../../../../function/curry/2/_/index";
import arrayLikeCountOfCore from "../core/index";
import type { ArrayLikeCountOfDef } from "./index.D";

const arrayLikeCountOfDef = _curry2(arrayLikeCountOfCore) as ArrayLikeCountOfDef;
export default arrayLikeCountOfDef;
