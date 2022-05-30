import _curry2             from "../../../../../function/curry/2/_/index";
import arrayLikeUniqByCore from "../core/index";

// interfaces
import type { ArrayLikeUniqByDef } from "./index.D";

const arrayLikeUniqByDef = _curry2(arrayLikeUniqByCore) as ArrayLikeUniqByDef;
export default arrayLikeUniqByDef;
