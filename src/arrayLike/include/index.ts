import _curry2 from "../../function/curry/2/_/index";
import arrayLikeIncludeCore from "./core/index";
import type { ArrayLikeIncludeDef } from "./index.D";

const arrayLikeIncludeDef: ArrayLikeIncludeDef = _curry2(arrayLikeIncludeCore);
const arrayLikeInclude = Object.assign(arrayLikeIncludeDef, {
	core: arrayLikeIncludeCore
});

export default arrayLikeInclude;
