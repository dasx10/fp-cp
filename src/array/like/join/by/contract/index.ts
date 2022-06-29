import _curry2             from "../../../../../function/curry/2/_/index";
import arrayLikeJoinByCore from "../core/index";

// interfaces
import type { ArrayLikeJoinByDef } from "./index.D";

const arrayLikeJoinByDef = _curry2(arrayLikeJoinByCore) as ArrayLikeJoinByDef;
export default arrayLikeJoinByDef;
