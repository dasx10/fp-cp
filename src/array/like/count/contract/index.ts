import _curry2            from "../../../../function/curry/2/_/index";
import arrayLikeCountCore from "../core/index";

// interfaces
import type { ArrayLikeCountDef } from "./index.D";

const arrayLikeCountDef = _curry2(arrayLikeCountCore) as ArrayLikeCountDef;
export default arrayLikeCountDef;
