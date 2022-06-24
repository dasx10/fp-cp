import _curry2 from "../../../../function/curry/2/_/index";
import arrayLikeConcatCore from "../core/index";

import type { ArrayLikeConcatDef } from "./index.D";

const arrayLikeConcatDef = _curry2(arrayLikeConcatCore) as ArrayLikeConcatDef;
export default arrayLikeConcatDef;
