// core
import _curry2                 from "../../../function/curry/2/_/index";
import arrayLikeFindRightCore  from "./core/index";

// dependencies
import arrayLikeFindIndexRight from "../index/right/index";

// interfaces
import type { ArrayLikeFindRightDef } from "./index.D";

const arrayLikeFindRightDef: ArrayLikeFindRightDef = _curry2(arrayLikeFindRightCore);

const arrayLikeFindRight = Object.assign(arrayLikeFindRightDef, {
	core  : arrayLikeFindRightCore,
	index : arrayLikeFindIndexRight,
});

export default arrayLikeFindRight;
