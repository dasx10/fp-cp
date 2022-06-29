import _curry2             from "../../../../function/curry/2/_/index";
import arrayLikeSelectCore from "../core/index";

import type { ArrayLikeSelectDef } from "./index.D";

const arrayLikeSelectDef = _curry2(arrayLikeSelectCore) as ArrayLikeSelectDef;
export default arrayLikeSelectDef;
