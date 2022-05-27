import _curry2                        from "../../../../function/curry/2/_/index";
import arrayLikeFindRightCore         from "../core/index";

import type { ArrayLikeFindRightDef } from "./index.D";

const arrayLikeFindRightDef = _curry2(arrayLikeFindRightCore) as ArrayLikeFindRightDef;
export default arrayLikeFindRightDef;
