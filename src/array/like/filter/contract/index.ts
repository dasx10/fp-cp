// core
import _curry2                 from "../../../../function/curry/2/_/index";
import arrayLikeFilterCore         from "../core/index";

// interfaces
import type { ArrayLikeFilterDef } from "./index.D";

const arrayFilterDef = _curry2(arrayLikeFilterCore) as ArrayLikeFilterDef;
export default arrayFilterDef;
