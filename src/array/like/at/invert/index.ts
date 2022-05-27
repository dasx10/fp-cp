import _curry2  from "../../../../function/curry/2/_/index";
import arrayLikeAtInvertDef from "./contract/index";
import arrayLikeAtInvertLib from "./lib/index";
import type { ArrayLikeAtInvertMain } from "./index.D";

const arrayLikeAtInvert: ArrayLikeAtInvertMain = Object.assign(arrayLikeAtInvertDef, arrayLikeAtInvertLib);
export default arrayLikeAtInvert;
