import _curry2 from "../../../../../function/curry/2/_/index";
import arrayLikeFindIndexCore from "../core/index";
import type { ArrayLikeFindIndexDef } from "./index.D";

const arrayLikeFindIndexDef = _curry2(arrayLikeFindIndexCore) as ArrayLikeFindIndexDef;
export default arrayLikeFindIndexDef;
