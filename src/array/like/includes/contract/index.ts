// core
import _curry2 from "../../../../function/curry/2/_/index";
import arrayLikeIncludesCore from "../core/index";

// interfaces
import type { ArrayLikeIncludesDef } from "./index.D";

const arrayLikeIncludesDef = _curry2(arrayLikeIncludesCore) as ArrayLikeIncludesDef;
export default arrayLikeIncludesDef;
