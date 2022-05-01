// core
import _curry2 from "../../../function/curry/2/_/index";
import arrayLikeAverageRightCore from "./core/index";

// interfaces
import type { AverageArrayLikeDef } from "../index.D";

const arrayLikeAverageRightDef: AverageArrayLikeDef = _curry2(arrayLikeAverageRightCore);

const arrayLikeAverageRight = Object.assign(arrayLikeAverageRightDef, {
	core: arrayLikeAverageRightCore,
});

export default arrayLikeAverageRight;
