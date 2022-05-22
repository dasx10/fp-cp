import _curry2 from "../../function/curry/2/_/index";
import arrayLikeExcludeCore from "./core/index";
import type { ArrayLikeExcludeDef } from "./index.D";

const arrayLikeExcludeDef: ArrayLikeExcludeDef = _curry2(arrayLikeExcludeCore);
const arrayLikeExclude = Object.assign(arrayLikeExcludeDef, {
	core: arrayLikeExcludeCore
});

export default arrayLikeExclude;
