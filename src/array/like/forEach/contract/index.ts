import _curry2 from "../../../../function/curry/2/_/index";
import arrayLikeForEachCore from "../core/index";

import type { ArrayLikeForEachDef } from "./index.D";

const arrayLikeForEachDef: ArrayLikeForEachDef = _curry2(arrayLikeForEachCore) as ArrayLikeForEachDef;
export default arrayLikeForEachDef;
