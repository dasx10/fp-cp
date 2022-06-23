import _curry2          from "../../../../function/curry/2/_/index";
import arrayLikeMapCore from "../core/index";
import type { ArrayLikeMapDef } from "./index.D";

const arrayLikeMapDef = _curry2(arrayLikeMapCore) as ArrayLikeMapDef;
export default arrayLikeMapDef;
