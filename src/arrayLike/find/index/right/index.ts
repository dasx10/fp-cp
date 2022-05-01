// core
import _curry2         from "../../../../function/curry/2/_/index";
import arrayLikeFindIndexRightCore from "./core/index";

// interfaces
import type { ArrayLikeFindIndexRightDef } from "./index.D";

const arrayLikeFindIndexRightDef: ArrayLikeFindIndexRightDef = _curry2(arrayLikeFindIndexRightCore);

const arrayLikeFindIndexRight = Object.assign(arrayLikeFindIndexRightDef, {
	core: arrayLikeFindIndexRightCore,
});

export default arrayLikeFindIndexRight;
