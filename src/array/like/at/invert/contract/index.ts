import _curry2 from "../../../../../function/curry/2/_/index";
import arrayLikeAtInvertCore from "../core/index";
import type { ArrayLikeAtInvertDef } from "./index.D";

const arrayLikeAtInvertDef = _curry2(arrayLikeAtInvertCore) as ArrayLikeAtInvertDef;
export default arrayLikeAtInvertDef;
