// core
import _curry2 from "../../../function/curry/2/_/index";
import arrayLikeMinimumRightCore from "./core/index";

// interfaces
import type { ArrayLikeMinimumRightDef } from "./index.D";

const arrayLikeMinimumRightDef: ArrayLikeMinimumRightDef = _curry2(arrayLikeMinimumRightCore);
const arrayLikeMinimumRight = Object.assign(arrayLikeMinimumRightDef, {
	core: arrayLikeMinimumRightCore,
});

export default arrayLikeMinimumRight;
