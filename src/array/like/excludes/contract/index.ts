// core
import _curry2 from "../../../../function/curry/2/_/index";
import arrayLikeExcludesCore from "../core/index";

// interfaces
import type { ArrayLikeExcludesDef } from "./index.D";

const arrayLikeExcludesDef = _curry2(arrayLikeExcludesCore) as ArrayLikeExcludesDef;
export default arrayLikeExcludesDef;
